describe('Mark todo item', () => {
  beforeEach(() => {
    cy.visit('localhost:4200');
  });

  before(() => {
    cy.request('POST', 'http://localhost:3000/todoItems', {
      id: 'd8d4286c-cd0f-41e4-9146-446827a51ebb',
      text: 'test-mark-item',
      isDone: false,
    });
  });

  it('should mark a todo item as done', () => {
    cy.contains('test-mark-item')
      .parent()
      .find("input[type='checkbox']")
      .as('newItemCheckbox');

    cy.intercept(
      'PATCH',
      'http://localhost:3000/todoItems/d8d4286c-cd0f-41e4-9146-446827a51ebb'
    ).as('markTodo');

    // Mark as done
    cy.get('@newItemCheckbox').click();

    cy.wait('@markTodo').then((interceptor) => {
      expect(interceptor.request.body).to.deep.equal({ isDone: true });
      expect(interceptor.response?.statusCode).to.equal(200);
      cy.get('@newItemCheckbox').should('be.checked');
    });

    // Mark as undone
    cy.get('@newItemCheckbox').click();
    cy.wait('@markTodo').then((interceptor) => {
      expect(interceptor.request.body).to.deep.equal({ isDone: false });
      expect(interceptor.response?.statusCode).to.equal(200);
      cy.get('@newItemCheckbox').should('not.be.checked');
    });
  });
});
