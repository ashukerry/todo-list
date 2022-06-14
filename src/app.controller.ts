import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './interface/cats.interface';

@Controller('cats')
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private catsService: AppService) {}
  @Post()
  async create(@Body() createCatDto) {
    return this.catsService.createCat(createCatDto);
  }
  @Get()
  getHello(): string {
    return 'this is a list of cats';
    //this.appService.getHello();
  }
  @Get('/list')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
    //this.appService.getHello();
  }
}
