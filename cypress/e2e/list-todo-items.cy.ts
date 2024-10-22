import { ITodoItem } from 'src/app/interfaces/todo-item.interface';

describe('List todo items', () => {
  let todoItems: ITodoItem[];

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/todoItems').as('getTodos');
    cy.visit('localhost:4200');
    cy.wait('@getTodos').then((interception) => {
      expect(interception.response?.statusCode).equal(200);
      todoItems = interception.response?.body;
    });
  });

  // it('should render the correct list', async () => {
  //   todoItems.forEach((item, index) => {
  //     cy.get("[data-test-id='todoItem']")
  //       .eq(index)
  //       .should('contain.text', item.text);
  //   });
  // });

  // it('should add a new todo item', () => {
  //   cy.get("input[placeholder='Add new item'").type('Testing 101');
  //   cy.intercept('POST', 'http://localhost:3000/todoItems').as('addTodo');
  //   cy.get("[data-test-id='addTodoItem']").click();
  //   cy.wait('@addTodo').then((interception) => {
  //     expect(interception.request.body.text).equal('Testing 101');
  //     expect(interception.response?.statusCode).equal(201);
  //     cy.get("[data-test-id='todoItem']")
  //       .last()
  //       .should('contain.text', 'Testing 101')
  //       .get("input[type='checkbox'")
  //       .last()
  //       .should('not.be.checked');
  //   });
  // });

  it('should mark a todo item as done', () => {
    let addedTodoItemId = '';
    cy.get("input[placeholder='Add new item'").type('Testing checkbox');
    cy.intercept('POST', 'http://localhost:3000/todoItems').as('addTodo');
    cy.intercept('GET', 'http://localhost:3000/todoItems').as('getNewTodos');
    cy.get("[data-test-id='addTodoItem']").click();
    cy.wait('@getNewTodos').then((interception) => {
      addedTodoItemId =
        interception.response?.body[interception.response.body.length - 1].id;
    });
    cy.intercept(
      'POST',
      `http://localhost:3000/todoItems/${addedTodoItemId}`
    ).as('markTodoItem');
    cy.contains('Testing checkbox')
      .parent()
      .get("input[type='checkbox']")
      .click();
    cy.wait('@markTodoItem').then((interception) => {
      expect(interception.response?.statusCode).equal(200);
    });
  });
});
