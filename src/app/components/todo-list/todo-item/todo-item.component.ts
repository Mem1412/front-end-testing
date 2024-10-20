import { Component, input, output } from '@angular/core';
import { ITodoItem } from '../../../interfaces/todo-item.interface';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  todoItem = input.required<ITodoItem>();
  todoItemChange = output<ITodoItem>();
  todoItemDelete = output<void>();
}
