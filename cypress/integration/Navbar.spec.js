describe('User can interact with navbar', () => {
  beforeEach(() => {
    cy.server()
    cy.visit('http://localhost:3001')
  });
  
  it('successfully', () => {
    cy.get('#navbar').within(() => {
      cy.get('#cv-page').click()
      cy.get('#title-1').should('contain', 'Private Tutor')
      cy.get('#about-page').click()
      cy.get('#description').should('contain', 'Ambitious')
    })
  })
})
