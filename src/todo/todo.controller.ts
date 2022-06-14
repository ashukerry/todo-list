import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { TodoPost } from 'src/models/todo.interface';
import { DeleteResult } from 'typeorm';
import { TodoServices } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoServices: TodoServices) {}
  @Post()
  createTodo(@Body() todo: TodoPost): Observable<TodoPost> {
    return this.todoServices.createTodo(todo);
  }
  @Get()
  getTodo(): Observable<TodoPost[]> {
    return this.todoServices.getAllTodo();
  }
  @Put(':id')
  upDateTodo(@Param('id') id: number, @Body() todo: TodoPost) {
    return this.todoServices.updateTodo(id, todo);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id: number): Observable<DeleteResult> {
    return this.todoServices.deletePost(id);
  }
}
