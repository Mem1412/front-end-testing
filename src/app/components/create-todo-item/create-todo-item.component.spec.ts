import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoItemComponent } from './create-todo-item.component';

describe('CreateTodoItemComponent', () => {
  let component: CreateTodoItemComponent;
  let fixture: ComponentFixture<CreateTodoItemComponent>;
  // let addButton: HTMLButtonElement;
  // let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTodoItemComponent);
    component = fixture.componentInstance;
    // addButton = fixture.debugElement.query(By.css('button')).nativeElement;
    // input = fixture.debugElement.query(By.css('input'))
    //   .nativeElement as HTMLInputElement;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should emit createTodoItem when the add button is clicked', () => {
  //   spyOn(component.createTodoItem, 'emit');
  //   input.value = 'test content';
  //   addButton.click();
  //   expect(component.createTodoItem.emit).toHaveBeenCalledOnceWith(
  //     'test content',
  //   );
  // });

  // it('should not emit createTodoItem when the add button is clicked and the text is empty', () => {
  //   spyOn(component.createTodoItem, 'emit');
  //   addButton.click();
  //   expect(component.createTodoItem.emit).not.toHaveBeenCalled();
  // });

  // it('should clear the input after clicking the button', () => {
  //   input.value = 'test content';
  //   addButton.click();
  //   expect(input.value).toBeFalsy();
  // });
});
