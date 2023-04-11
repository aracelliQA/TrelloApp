describe('Verifying list items', () => {
    beforeEach(() => {
      cy.NewBoard('Board1')
      cy.NewList('List1')
      cy.contains('My Boards').click()
      cy.NewBoard('Board2')
      cy.NewList('List1')
      cy.contains('My Boards').click()
    })
  
    

    it('Should stared a board', () => {
        cy
            .get('[data-cy="board-item"]')
            .eq(0)
            .trigger('mouseover')

        cy
            .get('[data-cy=star]')
            .eq(0)
            .should('be.visible')

        cy
            .get('[data-cy="board-item"]')
            .eq(0)
            .trigger('mouseout')
        
        cy
            .get('[data-cy=star]')
            .eq(0)
            .should('not.be.visible')

          
            })

})