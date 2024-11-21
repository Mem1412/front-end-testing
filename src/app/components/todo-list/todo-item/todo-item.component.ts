import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ITodoItem } from 'src/app/interfaces/todo-item.interface';

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
