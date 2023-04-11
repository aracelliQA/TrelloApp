describe('Verifying list items', () => {
    beforeEach(() => {
      cy.NewBoard()
      cy.NewList('List1')
      cy.AddingTasks(0,'Task1')
      cy.AddingTasks(0,'Task2')
      cy.AddingTasks(0,'Task3')
          
    })
  
    afterEach(()=>{
      cy.DeleteBoard()
    })
  
    it('Should get list elements and check the contain', ()=>{
         
        cy
        .get('[data-cy=task]')
        .should( item => {
          if (item.length !== 3) {
            throw new Error('Not enough elements!')
          }
          expect(item[0]).to.contain.text('Task1')
          expect(item[1]).to.contain.text('Task2')
        })
    })

})