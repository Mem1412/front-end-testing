import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITodoItem } from '../interfaces/todo-item.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoItemsService {
  private readonly httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<ITodoItem[]>(
      'http://loca' + 'lhost:3000/todoItems',
    );
  }

  add(text: string) {
    const todoItem: ITodoItem = {
      id: crypto.randomUUID(),
      text,
      isDone: false,
    };
    return this.httpClient.post<ITodoItem>(
      'http://localhost:3000/todoItems',
      todoItem,
    );
  }

  delete(id: string) {
    return this.httpClient.delete<void>(
      `http://localhost:3000/todoItems/${id}`,
    );
  }

  patch(id: string, isDone: boolean) {
    return this.httpClient.patch<void>(
      `http://localhost:3000/todoItems/${id}`,
      { isDone },
    );
  }
}
