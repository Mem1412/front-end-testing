import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ITodoItem } from '../interfaces/todo-item.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoItemsService {
  private readonly httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<ITodoItem[]>('localhost:3000/todoItems');
  }

  add(item: ITodoItem) {
    return this.httpClient.post<ITodoItem>('localhost:3000/todoItems', item);
  }

  delete(id: string) {
    return this.httpClient.delete<void>(`localhost:3000/todoItems/${id}`);
  }
}
