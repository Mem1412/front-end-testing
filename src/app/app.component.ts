import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-list/todo-item/todo-item.component';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponent,
    TodoItemComponent,
    CreateTodoItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // todoItems: ITodoItem[] = [];
  // private readonly todoItemsService = inject(TodoItemsService);
  // ngOnInit() {
  //   this.getTodoItems();
  // }
  // addTodoItem(itemText: string) {
  //   this.todoItemsService.add(itemText).subscribe(() => {
  //     this.getTodoItems();
  //   });
  // }
  // deleteTodoItem(id: string) {
  //   this.todoItemsService.delete(id).subscribe(() => {
  //     this.getTodoItems();
  //   });
  // }
  // patchTodoItem(todoItem: ITodoItem) {
  //   this.todoItemsService.patch(todoItem.id, todoItem.isDone).subscribe(() => {
  //     this.getTodoItems();
  //   });
  // }
  // private getTodoItems() {
  //   this.todoItemsService
  //     .getAll()
  //     .subscribe((items) => (this.todoItems = items));
  // }
}
