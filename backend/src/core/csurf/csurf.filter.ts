import { ArgumentsHost, Catch, ForbiddenException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class CsurfFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    if (exception.code === 'EBADCSRFTOKEN') {
      super.catch(new ForbiddenException('Bad CSRF Token'), host);
    } else {
      super.catch(exception, host);
    }
  }
}
