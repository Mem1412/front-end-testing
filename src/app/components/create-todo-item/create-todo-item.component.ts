import { Component } from '@angular/core';

@Component({
  selector: 'app-create-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './create-todo-item.component.html',
  styleUrl: './create-todo-item.component.scss',
})
export class CreateTodoItemComponent {
  // input = viewChild.required<ElementRef<HTMLInputElement>>('input');
  // createTodoItem = output<string>();
  //
  // emitCreateTodoItem() {
  //   const value = this.input().nativeElement.value;
  //   if (!value) return;
  //   this.createTodoItem.emit(value);
  //   this.input().nativeElement.value = '';
  // }
}
