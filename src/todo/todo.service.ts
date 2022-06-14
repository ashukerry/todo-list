import { Injectable } from '@nestjs/common';
import { TodoEntity } from 'src/models/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { TodoPost } from 'src/models/todo.interface';
import { format } from 'path';

@Injectable()
export class TodoServices {
  //Repository is supposed to work with your entity objects. Find entities, insert, update, delete, etc.
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  createTodo(todo: TodoPost): Observable<TodoPost> {
    return from(this.todoRepository.save(todo));
  }

  getAllTodo(): Observable<TodoPost[]> {
    return from(this.todoRepository.find());
  }
  updateTodo(id: number, todo: TodoPost) {
    return from(this.todoRepository.update(id, todo));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.todoRepository.delete(id));
  }
}
