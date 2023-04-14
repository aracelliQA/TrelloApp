it('Stubbing response', () => {

    cy
    .intercept({
      method: 'GET',
      url: '/api/boards',
      fixture: 'threeBoards.json'
    }).as('boardList')
  
    cy
      .visit('/')
  
  });