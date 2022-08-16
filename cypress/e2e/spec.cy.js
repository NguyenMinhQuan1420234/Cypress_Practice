describe('empty spec', () => {
  it('passes', () => {
    const checkAndReload = () => {
      // get the element's text, convert into a number
      cy.get('#demo')
        .should('not.be.empty')
        .invoke('text')
        .then(parseInt)
        .then((number) => {
          // if the expected number is found
          // stop adding any more commands
          if (number === 7) {
            cy.log('lucky **7**')
    
            return
          }
    
          // otherwise insert more Cypress commands
          // by calling the function after reload
          cy.wait(500, { log: false })
          cy.reload()
          checkAndReload()
        })
    }
    
    cy.visit('public/index.html')
    checkAndReload()
  })
})