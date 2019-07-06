import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { handlebars } from 'hbs';
import * as request from 'request';
import { resolve } from 'path';
import { Request, Response } from 'express';
import * as httpProxy from 'http-proxy';

@Catch()
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
            const rendered = handlebars.compile(body)({ csrfToken: req.csrfToken() });
            response.status(200).send(rendered);
          }
        });
      }
      // response.sendFile(resolve(__dirname, '../../client/build/index.html'));
    }
  }
}
