describe('empty spec', () => {
    before(() => {
        cy.fixture('users.json').as('userInfo')
    })
    it('login', function() {
        cy.visit('https://demoqa.com/login')
        cy.get('#userName').type(this.userInfo.username)
        cy.get('#password').type(this.userInfo.password)
        cy.get('#login').click()
        cy.get('label#userName-value').should('have.text', "quan")
        cy.xpath('//label[@id="userName-value"]').should('have.text', "quan")
    })
})