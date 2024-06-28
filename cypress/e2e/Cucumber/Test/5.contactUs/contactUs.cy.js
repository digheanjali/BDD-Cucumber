///<reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/contactUs"
import data from "../../../../fixtures/contactUsPayload"


let pg = new page
let currentUser;


Given('Navigate to contactUs page {word}', (index) => {
    currentUser = data[index]

    pg.visiturl()

})
When('I enter the user details', () => {
    pg.EnteruserDetails(currentUser)

})
And('I clicl on submit button', () => {

    pg.btnclick(pg.selectors.submitbtn)


})
Then('verify the login text', () => {
    pg.validateText(pg.selectors.thankyoumsg, 'Thank You for your Message!')

})


