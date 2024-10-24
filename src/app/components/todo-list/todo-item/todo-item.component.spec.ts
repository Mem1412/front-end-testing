import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  // let componentRef: ComponentRef<TodoItemComponent>;
  let fixture: ComponentFixture<TodoItemComponent>;
  // let mockTodoItem: ITodoItem;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemComponent],
    }).compileComponents();

    // mockTodoItem = {
    //   id: '4c73f06e-1234-47b0-a82f-084a528dbf41',
    //   text: 'test',
    //   isDone: false,
    // };

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    // componentRef = fixture.componentRef;
    // componentRef.setInput('todoItem', mockTodoItem);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render text content', () => {
  //   const header = fixture.debugElement.query(By.css("[data-test-id='text']"))
  //     .nativeElement as HTMLElement;
  //   expect(header.textContent).toBe(component.todoItem().text);
  // });

  // it('should set the checkbox to checked when isDone is true and unchecked when isDone is false.', async () => {
  //   const checkbox = fixture.debugElement.query(
  //     By.css('input[type="checkbox"]'),
  //   ).nativeElement as HTMLInputElement;
  //   expect(checkbox.checked).toBeFalse();
  //   componentRef.setInput('todoItem', { id: '', text: '', isDone: true });
  //   fixture.detectChanges();
  //   await fixture.whenStable();
  //   expect(checkbox.checked).toBeTrue();
  // });

  // it('should emit todoItemChange event with the todoItem when the checkbox is changed', () => {
  //   const checkbox = fixture.debugElement.query(
  //     By.css('input[type="checkbox"]'),
  //   ).nativeElement as HTMLInputElement;
  //   spyOn(component.todoItemChange, 'emit');
  //   checkbox.checked = true;
  //   checkbox.dispatchEvent(new Event('change'));
  //   expect(component.todoItemChange.emit).toHaveBeenCalledOnceWith(
  //     mockTodoItem,
  //   );
  // });

  // it('should emit toDoItemDelete event when the delete button is clicked', () => {
  //   const deleteButton = fixture.debugElement.query(
  //     By.css('[data-test-id="delete"]'),
  //   ).nativeElement as HTMLButtonElement;
  //   spyOn(component.todoItemDelete, 'emit');
  //   deleteButton.click();
  //   expect(component.todoItemDelete.emit).toHaveBeenCalledOnceWith();
  // });
});
