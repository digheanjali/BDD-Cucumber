///<reference types="cypress" />
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
import pages from "../../Pages/AutoExcpage"
import user from "../../../../fixtures/4.AEPayload"


let pg1 = new pages
let currentUser;
let title;


Given('I visit to Automation Excercise website {word}', (index) => {

    currentUser = user[index]   //user[0],user[1]
    pg1.visiturl()

})
And('click on signup login button', () => {

    pg1.btnclick(pg1.selectors.loginbtn)

})
When('i enter username and userEmail and click on login button', () => {
    pg1.newUserSignup(currentUser)
    pg1.btnclick(pg1.selectors.signupbtn)

})
And('i enter user information and click on account create button', () => {

    if (currentUser.title == 'Mrs') {
        title = pg1.selectors.titleMrs
    }
    else if (currentUser.title == 'Mr') {
        title = pg1.selectors.titleMr
    }

    pg1.accountinfo(title, currentUser)

})
When('i verify new user created', () => {
    pg1.validatetext(pg1.selectors.createAccountText, 'Account Created!')


})
Then('i verify new user login', () => {

    pg1.btnclick(pg1.selectors.loginbtn)
    pg1.btnclick(pg1.selectors.logout)
    pg1.LoginToYourAccount(currentUser)
    pg1.validatetext(pg1.selectors.logintextvalidation, currentUser.username)




})