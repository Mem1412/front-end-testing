describe('Delete todo item', () => {
  // beforeEach(() => {
  //   cy.visit('localhost:4200');
  // });
  // before(() => {
  //   cy.request('POST', 'http://localhost:3000/todoItems', {
  //     id: 'c5d0b698-735d-45d2-8acc-7ef4924cffea',
  //     text: 'test-delete-item',
  //     isDone: false,
  //   });
  // });
  // it('should delete the item', () => {
  //   const deleteButton = cy
  //     .contains('test-delete-item')
  //     .parent()
  //     .parent()
  //     .find('button');
  //
  //   cy.intercept(
  //     'DELETE',
  //     'http://localhost:3000/todoItems/c5d0b698-735d-45d2-8acc-7ef4924cffea'
  //   ).as('deleteTodoItem');
  //
  //   deleteButton.click();
  //
  //   cy.wait('@deleteTodoItem').then((interceptor) => {
  //     expect(interceptor.response?.statusCode).to.equal(200);
  //     expect(cy.contains('test-delete-item').should('not.exist'));
  //   });
  // });
});
