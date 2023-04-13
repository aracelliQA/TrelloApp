// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('NewBoard', (boardname) => { 
    cy.visit('/')
    cy
        .get('[data-cy="create-board"]')
        .click()
    cy
        .get('[data-cy="new-board-input"]')
        .type(boardname)
    cy
        .get('[data-cy="new-board-create"]')
        .click()
   
})

Cypress.Commands.add('NewList', (listname) =>{
    cy
        .get('[data-cy="add-list"]')
        .type(listname)
    cy
        .get('[data-cy="save"]')
        .click()
})

Cypress.Commands.add('AddingTasks', (list,element) =>{
    cy
        .get('[data-cy="new-task"]')
        .eq(list)
        .click()
    cy  
        .get('[data-cy="task-input"]')
        .eq(list)
        .type(element)
    
    cy
        .get('[data-cy="add-task"]')
        .eq(list)
        .click()
})

Cypress.Commands.add('Login', () => {
    cy.visit('/')
    cy 
        .get('[data-cy="login-menu"]')
        .click()

    cy
      .get('[data-cy="login-email"]')
      .type('filip@example.com')

    cy
      .get('[data-cy="login-password"]')
      .type('Asdf.1234#')

    cy
      .get('[data-cy="login"]')
      .click()

    })


Cypress.Commands.add('DeleteBoard', () =>{
    cy
        .get('[data-cy="board-options"] > .options > path')
        .click()
    cy
        .get('[data-cy="board-options"] > #myDropdown > .delete')
        .click()
})