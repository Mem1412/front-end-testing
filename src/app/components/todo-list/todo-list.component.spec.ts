import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from 'src/app/components/todo-list/todo-item/todo-item.component';
import { By } from '@angular/platform-browser';
import { ITodoItem } from 'src/app/interfaces/todo-item.interface';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let todoItemComponent: TodoItemComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('todoItems', [
      {
        id: '4c73f06e-1234-47b0-a82f-084a528dbf41',
        text: 'test text',
        isDone: false,
      },
    ]);
    fixture.detectChanges();

    todoItemComponent = fixture.debugElement.query(
      By.directive(TodoItemComponent),
    ).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit todoItemChange when todoItem component todoItemChange event is emitted', () => {
    const mockTodoItem: ITodoItem = {
      id: '4c73f06e-1234-47b0-a82f-084a528dbf41',
      text: 'test text',
      isDone: false,
    };
    spyOn(component.todoItemChange, 'emit');
    todoItemComponent.todoItemChange.emit(mockTodoItem);
    expect(component.todoItemChange.emit).toHaveBeenCalledOnceWith(
      mockTodoItem,
    );
  });

  it('should emit todoItemDelete event when todoItem component todoItemDelete is emitted', () => {
    spyOn(component.todoItemDelete, 'emit');
    todoItemComponent.todoItemDelete.emit();
    expect(component.todoItemDelete.emit).toHaveBeenCalledOnceWith(
      todoItemComponent.todoItem().id,
    );
  });
});
