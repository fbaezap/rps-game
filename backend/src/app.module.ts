import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ExpressSessionMiddleware } from '@nest-middlewares/express-session';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsurfMiddleware } from './core/csurf/csurf.middleware';
import { GameModule } from './game/game.module';

@Module({
  imports: [GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    ExpressSessionMiddleware.configure({
      secret: 'ultra_sercret',
      name: 'session',
      resave: false,
      saveUninitialized: true,
      /* store: new redisStore({
        client: redisClient,
        ttl: 12 * 60 * 60,
      }), */
    });
    consumer.apply(ExpressSessionMiddleware).forRoutes('*');

    CsurfMiddleware.configure({});
    consumer.apply(CsurfMiddleware).forRoutes('*');
  }
}
