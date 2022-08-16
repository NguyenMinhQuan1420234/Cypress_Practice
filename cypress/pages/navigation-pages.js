const TXT_USERNAME = "#userName"
const TXT_PASSWORD = "#password"
const IMG_USERNAME = "//a[text()=' Admin2 ']"
export const NavigationPage = {
    getUsername(){
        return cy.xpath(IMG_USERNAME)
    }
}