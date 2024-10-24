import { TestBed } from '@angular/core/testing';

import { TodoItemsService } from './todo-items.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('TodoItemsService', () => {
  let service: TodoItemsService;
  // let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TodoItemsService);
    // httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should send a GET request to get all todoItems', () => {
  //   const mockResponse: ITodoItem[] = [
  //     {
  //       id: '4c73f06e-1234-47b0-a82f-084a528dbf41',
  //       text: 'Exercise',
  //       isDone: false,
  //     },
  //     {
  //       id: '58f72f6b-0e73-438d-ae1b-118e1d43a3e7',
  //       text: 'Read book',
  //       isDone: true,
  //     },
  //   ];
  //
  //   service.getAll().subscribe((items: any) => {
  //     expect(items).toEqual(mockResponse);
  //   });
  //
  //   const request = httpController.expectOne({
  //     method: 'GET',
  //     url: 'http://localhost:3000/todoItems',
  //   });
  //
  //   request.flush(mockResponse);
  // });

  // it('should send a POST request to add new todoItem', () => {
  //   const mockItemText = 'Test post request';
  //   service.add(mockItemText).subscribe();
  //
  //   const req = httpController.expectOne({
  //     method: 'POST',
  //     url: 'http://localhost:3000/todoItems',
  //   });
  //   expect(req.request.body.text).toEqual(mockItemText);
  //
  //   req.flush({});
  // });

  // it('should send DELETE request to delete a todoItem', () => {
  //   const id = '4c73f06e-1234-47b0-a82f-084a528dbf41';
  //   service.delete(id).subscribe();
  //   const req = httpController.expectOne({
  //     method: 'DELETE',
  //     url: `http://localhost:3000/todoItems/${id}`,
  //   });
  //   req.flush({});
  //   expect().nothing();
  // });

  // it('should send PATCH request to patch a todoItem', () => {
  //   const id = '4c73f06e-1234-47b0-a82f-084a528dbf41';
  //   service.patch(id, true).subscribe();
  //   const req = httpController.expectOne({
  //     method: 'PATCH',
  //     url: `http://localhost:3000/todoItems/${id}`,
  //   });
  //   expect(req.request.body).toEqual({ isDone: true });
  //   req.flush({});
  //   expect().nothing();
  // });

  // afterEach(() => {
  //   httpController.verify();
  // });
});
