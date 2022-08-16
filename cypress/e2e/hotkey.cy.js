describe('empty spec', () => {
    it('hotkey', function() {
      cy.visit('https://demoqa.com/login')
      cy.get('#userName').type(Cypress.env('username'))
      cy.get('#password').type(Cypress.env('password'))
      cy.get('#login').click()
      cy.get('label#userName-value').should('have.text', "quan")
      cy.xpath('//label[@id="userName-value"]').should('have.text', "quan")
    })
})