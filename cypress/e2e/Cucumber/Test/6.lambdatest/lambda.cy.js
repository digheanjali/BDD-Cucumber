///<reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import page from "../../Pages/Lambdatest"
import data from "../../../../fixtures/LTpayload"

let pg = new page
let currentUser;

Given('I visit to lambda test login url{word}', (index) => {
    currentUser = data[index]
    pg.visitUrl()
})
And('i click on continue button', () => {
    pg.btnClick(pg.selector.registerUContinueBtn)
})
When('i fill the form and i click on continue button', () => {
    pg.newUserRegister(currentUser)


})
Then('i check for new user created', () => {
    pg.validateText(pg.selector.validationText, ' Your Account Has Been Created!')
})


And('click on my account and logout user', () => {
    pg.Logout()



})
Then('again login with nser created', () => {
    pg.login()

})