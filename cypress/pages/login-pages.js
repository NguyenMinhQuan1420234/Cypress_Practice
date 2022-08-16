const TXT_USERNAME = "#username"
const TXT_PASSWORD = "#password"
const CHK_REMEMBER = "remember"
const BTN_LOGIN = "input[value='Login']"
const LNK_FORGOT_PASSWORD = "Forgot the password?"
const MSG_REQUIRE_USERNAME = "//input[@id='username']/following-sibling::div//p[@ng-message='required']"  //"This is a required field."
const MSG_REQUIRE_PASSWORD = "//input[@id='password']/following-sibling::div//p[@ng-message='required']"  //"This is a required field."
const MSG_INCORRECT = "//div[@ng-show='isError']" //"The Username or Password you entered is incorrect"

export const LoginPage = {
    inputUsername(username){
        cy.get(TXT_USERNAME).type(username)
    },
    inputPassword(password){
        cy.get(TXT_PASSWORD).type(password)
    },
    clickLoginButton(){
        cy.get(BTN_LOGIN).click()
    },
    getRequireMessageUsername() {
        return cy.xpath(MSG_REQUIRE_USERNAME)
    },
    getRequireMessagePassword() {
        return cy.xpath(MSG_REQUIRE_PASSWORD)
    },
    getIncorrectMessage() {
        return cy.xpath(MSG_INCORRECT)
    }
}