describe('Login page', () => {
    it('Stops the user from entering without filling in a name', () => {
      cy.visit('/') 
      cy.contains('Enter').click()
      cy.contains('All snipsounds').should('not.exist')
      cy.get('input[placeholder="Name.."]')
      .type("Jonathan")
      cy.contains('Enter').click()
      cy.contains('All snipsounds').should('exist')
    })
    
    it('Stops the user from entering when name is too long', () => {
        cy.visit('/') 
        cy.get('input[placeholder="Name.."]')
        .type("Jonathans too longname for SnipSound's backend ok?")
        cy.contains('Name must be less than 15 characters').should('exist')
        cy.contains('Enter').click()
        cy.contains('All snipsounds').should('not.exist')
      })
  })