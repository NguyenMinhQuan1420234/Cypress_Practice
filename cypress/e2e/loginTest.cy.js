const { LoginPage } = require("../pages/login-pages.js")
const { NavigationPage } = require("../pages/navigation-pages.js")

describe('empty spec', () => {
  beforeEach( function ()  {
        cy.fixture('users.json').as('account')
    })
  it('loginSuccessfully', function () {
    cy.visit('http://192.168.237.10:3000/#!/login')
    LoginPage.inputUsername(this.account.validAccount.username)
    LoginPage.inputPassword(this.account.validAccount.password)
    LoginPage.clickLoginButton()
    NavigationPage.getUsername().should('contains.text', "Admin2")
  })
  it('loginWithWrongUsernamePassword', function () {
    cy.visit('http://192.168.237.10:3000/#!/login')
    LoginPage.inputUsername(this.account.invalidAccount.username)
    LoginPage.inputPassword(this.account.invalidAccount.password)
    LoginPage.clickLoginButton()
    LoginPage.getIncorrectMessage().should('contains.text', "The Username or Password you entered is incorrect")
  })
  it('loginWithEmptyPassword', function () {
    cy.visit('http://192.168.237.10:3000/#!/login')
    LoginPage.inputUsername(this.account.validAccount.username)
    LoginPage.clickLoginButton()
    LoginPage.getRequireMessagePassword().should('contains.text', "This is a required field.")
  })
  it('loginWithEmptyUsername', function () {
    cy.visit('http://192.168.237.10:3000/#!/login')
    LoginPage.inputPassword(this.account.validAccount.password)
    LoginPage.clickLoginButton()
    LoginPage.getRequireMessageUsername().should('contains.text', "This is a required field.")
  })
  it('loginloginWithEmptyUsernamePassword', function () {
    cy.visit('http://192.168.237.10:3000/#!/login')
    LoginPage.clickLoginButton()
    LoginPage.getRequireMessageUsername().should('contains.text', "This is a required field.")
    LoginPage.getRequireMessagePassword().should('contains.text', "This is a required field.")
  })
  
})