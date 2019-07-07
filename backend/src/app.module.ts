import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ExpressSessionMiddleware } from '@nest-middlewares/express-session';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsurfMiddleware } from './core/csurf/csurf.middleware';
import { GameModule } from './game/game.module';
import { RedisService } from './core/redis/redis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'changeme',
    database: 'rps_game_db',
    entities: [__dirname  + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), GameModule],
  controllers: [AppController],
  providers: [AppService, RedisService],
})
export class AppModule implements NestModule {
  constructor(private redisService: RedisService) {}
  configure(consumer: MiddlewareConsumer) {
    const redisClient = this.redisService.client;
    const redisStore = connectRedis(session);
    ExpressSessionMiddleware.configure({
      secret: 'ultra_sercret',
      name: 'session',
      resave: false,
      saveUninitialized: true,
      store: new redisStore({
        client: redisClient,
        ttl: 12 * 60 * 60,
      }),
    });
    consumer.apply(ExpressSessionMiddleware).forRoutes('*');

    CsurfMiddleware.configure({});
    consumer.apply(CsurfMiddleware).exclude({ path: '/sockjs-node', method: RequestMethod.ALL}).forRoutes('*');
  }
}
