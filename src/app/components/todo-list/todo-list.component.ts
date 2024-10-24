import { Component } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  // todoItems = input<ITodoItem[]>([]);
  // todoItemChange = output<ITodoItem>();
  // todoItemDelete = output<string>();
}
