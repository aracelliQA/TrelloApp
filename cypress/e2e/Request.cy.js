  
  it('Sending requests', () => {
  
    cy.visit('/')
    cy.request({
      method: 'POST',
      url: '/api/boards',
      body: {
         name: 'board created by .request() command'
      }
    })

    cy.request({
      method: 'PATCH',
      url: '/api/boards/39161256059',
      body: {
         name: 'Renaming the board'
      }
    })

    cy.request({
      method: 'DELETE',
      url: '/api/boards/39161256059',

    })
  });