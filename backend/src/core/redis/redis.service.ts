import * as redis from 'redis';
import { Injectable } from '@nestjs/common';
import { Subject, Observable } from 'rxjs';
import { resolve } from 'path';
import { tap } from 'rxjs/operators';
import { isArray } from 'util';

@Injectable()
export class RedisService {
  private _client: redis.RedisClient;

  constructor() {
    this._client = redis.createClient();
  }

  get client() {
    return this._client;
  }
}
