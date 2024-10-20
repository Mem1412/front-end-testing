import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { By } from '@angular/platform-browser';
import { ComponentRef, signal } from '@angular/core';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let componentRef: ComponentRef<TodoItemComponent>;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('todoItem', { id: '1', text: 'test', isDone: false });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text content', () => {
    const header = fixture.debugElement.query(By.css("[data-test-id='text']"))
      .nativeElement as HTMLElement;
    expect(header.textContent).toBe(component.todoItem().text);
  });

  it('should set the checkbox to checked when isDone is true and unchecked when isDone is false.', async () => {
    const checkbox = fixture.debugElement.query(
      By.css('input[type="checkbox"]')
    ).nativeElement as HTMLInputElement;
    await fixture.whenStable();
    expect(checkbox.checked).toBeFalse();
    componentRef.setInput('todoItem', { id: '', text: '', isDone: true });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(checkbox.checked).toBeTrue();
  });

  it('should emit todoItemChange event with the todoItem when the checkbox is changed', () => {
    const checkbox = fixture.debugElement.query(
      By.css('input[type="checkbox"]')
    ).nativeElement as HTMLInputElement;
    spyOn(component.todoItemChange, 'emit');
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
    expect(component.todoItemChange.emit).toHaveBeenCalledOnceWith({
      id: '1',
      text: 'test',
      isDone: true,
    });
  });

  it('should emit toDoItemDelete event when the delete button is clicked', () => {
    const deleteButton = fixture.debugElement.query(
      By.css('[data-test-id="delete"]')
    ).nativeElement as HTMLButtonElement;
    spyOn(component.todoItemDelete, 'emit');
    deleteButton.click();
    expect(component.todoItemDelete.emit).toHaveBeenCalledOnceWith();
  });
});