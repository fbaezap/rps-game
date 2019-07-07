import { ArgumentsHost, Catch, NotFoundException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';
import { handlebars } from 'hbs';
import * as httpProxy from 'http-proxy';
import * as request from 'request';
import { readFileSync } from 'fs';
import { join } from 'path';

@Catch(NotFoundException)
export class NotFoundFilter extends BaseExceptionFilter {
  proxy = httpProxy.createProxyServer({ target: 'http://localhost:4200' });
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse();
    const req: Request = ctx.getRequest();

    const path = req.path;
    if (path && path.startsWith('/api')) {
      // API 404, serve default nest 404:
      super.catch(exception, host);
    } else if (process.env.NODE_ENV === 'production') {
      try {
        const file = readFileSync(join(process.env.PATH_FRONTEND, 'index.html'), {
          encoding: 'utf8',
        });
        const rendered = handlebars.compile(file)({
          csrfToken: req.csrfToken(),
          gameDto: JSON.stringify(req.session.game || null),
        });
        response.status(200).send(rendered);
      } catch (eror) {
        super.catch(exception, host);
      }
    } else {
      if (path.includes('.') || path.startsWith('/sockjs-node/')) {
        this.proxy.web(req, response, null, (error) => {
          super.catch(error, host);
        });
      } else {
        request('http://localhost:4200', (error, resp, body) => {
          if (error) {
            super.catch(error, host);
            return;
          } else {
            const rendered = handlebars.compile(body)({
              csrfToken: req.csrfToken(),
              gameDto: JSON.stringify(req.session.game || null),
            });
            response.status(200).send(rendered);
          }
        });
      }
      // response.sendFile(resolve(__dirname, '../../client/build/index.html'));
    }
  }
}
