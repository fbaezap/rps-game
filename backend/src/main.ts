import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { NotFoundFilter } from './core/not-found.filter';
import { CsurfFilter } from './core/csurf/csurf.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new CsurfFilter(httpAdapter));
  if (process.env.NODE_ENV === 'production') {
    app.useStaticAssets(process.env.PATH_FRONTEND, { index : false });
  }
  app.useGlobalFilters(new NotFoundFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
