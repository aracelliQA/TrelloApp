describe('Verifying list items', () => {
  beforeEach(() => {
    cy.NewBoard()
    cy.NewList('List1')
        
  })

  afterEach(()=>{
    cy.DeleteBoard()
  })

  it('Should get list elements', ()=>{
    cy.AddingTasks(0,'Task1')
    cy.AddingTasks(0,'Task2')
    cy.AddingTasks(0,'Task3')
    
    cy
      .get('[data-cy="tasks-list"]')
      .contains('Task1')
  })

  it('Should get list elements on a specifc list', ()=>{
       
    cy.NewList('List2')
    cy
      .get('[data-cy=list]')
      .AddingTasks(0,'Task1')

      cy
      .get('[data-cy=list]')
      .AddingTasks(1,'Task1')
  })

 
})