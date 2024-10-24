describe('Add todo item', () => {
  // beforeEach(() => {
  //   cy.visit('localhost:4200');
  // });
  // it('should add a new todo item', () => {
  //   cy.get("input[placeholder='Add new item']").type('Test add item 101');
  //
  //   cy.intercept('POST', 'http://localhost:3000/todoItems').as('addTodo');
  //   cy.intercept('GET', 'http://localhost:3000/todoItems').as('getNewTodos');
  //
  //   cy.get("[data-test-id='addTodoItem']").click();
  //
  //   cy.wait('@addTodo').then((interception) => {
  //     expect(interception.request.body.text).equal('Test add item 101');
  //     expect(interception.response?.statusCode).equal(201);
  //   });
  //
  //   cy.wait('@getNewTodos').then((interception) => {
  //     expect(interception.response?.statusCode).equal(200);
  //     expect(
  //       interception.response?.body.some(
  //         (item: ITodoItem) => item.text === 'Test add item 101' && !item.isDone
  //       )
  //     ).to.be.true;
  //   });
  //
  //   cy.get("[data-test-id='todoItem']")
  //     .last()
  //     .should('contain.text', 'Test add item 101');
  //
  //   cy.get("input[type='checkbox']").last().should('not.be.checked');
  // });
});
