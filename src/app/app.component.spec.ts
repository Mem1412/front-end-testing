import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoItemsService } from 'src/app/services/todo-items.service';
import { of } from 'rxjs';
import { ITodoItem } from 'src/app/interfaces/todo-item.interface';
import { By } from '@angular/platform-browser';
import { CreateTodoItemComponent } from 'src/app/components/create-todo-item/create-todo-item.component';

const mockedTodoItems: ITodoItem[] = [
  {
    id: '4c73f06e-1234-47b0-a82f-084a528dbf41',
    text: 'Exercise',
    isDone: false,
  },
  {
    id: '58f72f6b-0e73-438d-ae1b-118e1d43a3e7',
    text: 'Read book',
    isDone: true,
  },
  {
    id: '878d13dc-a8df-4a12-873d-62660310c826',
    text: 'Cook food',
    isDone: false,
  },
];

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const mockTodoItemsService = jasmine.createSpyObj('TodoService', [
    'getAll',
    'add',
    'delete',
  ]);
  mockTodoItemsService.getAll.and.returnValue(of(mockedTodoItems));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: TodoItemsService, useValue: mockTodoItemsService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call TodoItemsService.getAll in ngOnInit and set the todoItems', fakeAsync(() => {
    component.ngOnInit();
    expect(mockTodoItemsService.getAll).toHaveBeenCalledOnceWith();
    expect(component.todoItems).toEqual(mockedTodoItems);
  }));

  it('should call TodoItemsService.add and then TodoItemsService.getAll event is fired', () => {
    const createTodoItemComponent = fixture.debugElement.query(
      By.directive(CreateTodoItemComponent),
    ).componentInstance as CreateTodoItemComponent;
    const mockedTodoItemId = '878d13dc-a8df-4a12-873d-62660310c826';
    createTodoItemComponent.createTodoItem.emit(mockedTodoItemId);
    expect().nothing();
  });
});
