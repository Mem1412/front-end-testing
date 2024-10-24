import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// const mockedTodoItems: ITodoItem[] = [
//   {
//     id: '4c73f06e-1234-47b0-a82f-084a528dbf41',
//     text: 'Exercise',
//     isDone: false,
//   },
//   {
//     id: '58f72f6b-0e73-438d-ae1b-118e1d43a3e7',
//     text: 'Read book',
//     isDone: true,
//   },
//   {
//     id: '878d13dc-a8df-4a12-873d-62660310c826',
//     text: 'Cook food',
//     isDone: false,
//   },
// ];

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  // let createTodoItemComponent: CreateTodoItemComponent;
  // let todoListComponent: TodoListComponent;
  // let todoItemsService: any;
  // let todoItemsServiceStub: any;

  beforeEach(async () => {
    // todoItemsServiceStub = jasmine.createSpyObj('TodoService', [
    //   'getAll',
    //   'add',
    //   'delete',
    //   'patch',
    // ]);

    // todoItemsServiceStub.getAll.and.returnValue(of(mockedTodoItems));

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      // providers: [
      // { provide: TodoItemsService, useValue: todoItemsServiceStub },
      // ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // todoItemsService = TestBed.inject(TodoItemsService);

    // createTodoItemComponent = fixture.debugElement.query(
    //   By.directive(CreateTodoItemComponent),
    // ).componentInstance as CreateTodoItemComponent;

    // todoListComponent = fixture.debugElement.query(
    //   By.directive(TodoListComponent),
    // ).componentInstance as TodoListComponent;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call TodoItemsService.getAll in ngOnInit and set the todoItems', () => {
  //   expect(todoItemsService.getAll).toHaveBeenCalledTimes(1);
  //   expect(component.todoItems).toEqual(mockedTodoItems);
  // });

  // it('should call TodoItemsService.add and getTodoItems when createTodoItem event is fired', () => {
  //   todoItemsService.add.and.returnValue(of(''));
  //
  //   createTodoItemComponent.createTodoItem.emit('Test todo Item');
  //
  //   expect(todoItemsService.add).toHaveBeenCalledOnceWith('Test todo Item');
  //   expect(todoItemsService.getAll).toHaveBeenCalledTimes(2);
  // });

  // it('should call TodoItemsService.delete and getTodoItems when deleteTodoItem event is fired', () => {
  //   todoItemsService.delete.and.returnValue(of(''));
  //
  //   todoListComponent.todoItemDelete.emit(
  //     '878d13dc-a8df-4a12-873d-62660310c826',
  //   );
  //
  //   expect(todoItemsService.delete).toHaveBeenCalledOnceWith(
  //     '878d13dc-a8df-4a12-873d-62660310c826',
  //   );
  //   expect(todoItemsService.getAll).toHaveBeenCalledTimes(2);
  // });

  // it('should call TodoItemsService.patch with the correct id and inverted isDone value when todoItemChange event is fired', () => {
  //   todoItemsService.patch.and.returnValue(of(''));
  //
  //   todoListComponent.todoItemChange.emit({
  //     id: '878d13dc-a8df-4a12-873d-62660310c826',
  //     text: 'Cook food',
  //     isDone: false,
  //   });
  //   todoListComponent.todoItemChange.emit({
  //     id: '58f72f6b-0e73-438d-ae1b-118e1d43a3e7',
  //     text: 'Read book',
  //     isDone: true,
  //   });
  //
  //   expect(todoItemsService.patch).toHaveBeenCalledWith(
  //     '878d13dc-a8df-4a12-873d-62660310c826',
  //     false,
  //   );
  //   expect(todoItemsService.patch).toHaveBeenCalledWith(
  //     '58f72f6b-0e73-438d-ae1b-118e1d43a3e7',
  //     true,
  //   );
  // });
});
