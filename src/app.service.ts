import { Injectable } from '@nestjs/common';
import { CallTracker } from 'assert';
import { Cat } from './interface/cats.interface';

@Injectable()
export class AppService {
  private readonly cats: Cat[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  createCat(cat: Cat) {
    this.cats.push(cat);
    return cat;
  }
  findAll(): Cat[] {
    return this.cats;
  }
}
