import { Component, input, output } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ITodoItem } from 'src/app/interfaces/todo-item.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoItems = input<ITodoItem[]>([]);
  todoItemChange = output<ITodoItem>();
  todoItemDelete = output<string>();
}
