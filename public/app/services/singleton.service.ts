import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {
  uuid: number = Math.random();
  count: number = 1;
}
