describe('empty spec', () => {
    // before(() => {
    //     cy.fixture(example.json).as('userInfo')
    // })
    it('login', () => {
      cy.visit('http://192.168.237.10:3000/#!/login')
      cy.fixture("users.json").then(userInfo => {
        cy.get('#userName').type(userInfo.username)
        cy.get('#password').type(userInfo.password)
        cy.get('#login').click()
        cy.get('label#userName-value').should('have.text', "quan")
        cy.xpath('//label[@id="userName-value"]').should('have.text', "quan")
    })
    })
})