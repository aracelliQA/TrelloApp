it('Intercept requests', () => {
    cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boardList') //alias
 

    cy
      .visit('/')

    cy
        .wait('@boardList')
        .its('response.statusCode')
        .should('eq', 200)
  
    cy
      .get('[data-cy=board-item]')
      .should('have.length', 1)
  
  });