describe('List todo items', () => {
  // beforeEach(() => {
  //   cy.visit('localhost:4200');
  // });
  // before(() => {
  //   const dummyTodoItems: ITodoItem[] = [
  //     {
  //       id: 'd3d5c2bc-d4b9-4afb-b4ad-610d1b8cad30',
  //       text: 'Testing list 1',
  //       isDone: false,
  //     },
  //     {
  //       id: '26e37171-71b7-45e7-a210-d9f905b5cc93',
  //       text: 'Testing list 2',
  //       isDone: false,
  //     },
  //   ];
  //
  //   dummyTodoItems.forEach((item) => {
  //     cy.request('POST', 'http://localhost:3000/todoItems', item);
  //   });
  //   cy.intercept('GET', 'http://localhost:3000/todoItems').as('getTodos');
  // });
  // it('should fetch the correct todo items', () => {
  //   cy.wait('@getTodos').then((interception) => {
  //     expect(interception.response?.statusCode).equal(200);
  //
  //     const recentlyAddedItems = (
  //       interception.response?.body as ITodoItem[]
  //     ).slice(-2);
  //
  //     expect(recentlyAddedItems[0].id).to.equal(
  //       'd3d5c2bc-d4b9-4afb-b4ad-610d1b8cad30'
  //     );
  //     expect(recentlyAddedItems[0].isDone).to.be.false;
  //     expect(recentlyAddedItems[0].text).to.equal('Testing list 1');
  //
  //     expect(recentlyAddedItems[1].id).to.equal(
  //       '26e37171-71b7-45e7-a210-d9f905b5cc93'
  //     );
  //     expect(recentlyAddedItems[1].isDone).to.be.false;
  //     expect(recentlyAddedItems[1].text).to.equal('Testing list 2');
  //   });
  // });
  // it('should list the recently added items', () => {
  //   cy.get('div[data-test-id="todoItem"]').then((divs) => {
  //     const lastTwoDivs = divs.slice(-2);
  //     expect(lastTwoDivs[0]).to.contain('Testing list 1');
  //     expect(lastTwoDivs[1]).to.contain('Testing list 2');
  //   });
  // });
});
