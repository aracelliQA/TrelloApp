/// <reference types="cypress" />

it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards',},
      {
      fixture: 'threeBoards'
      }
    ).as('boardList')

  cy
    .visit('/')

});