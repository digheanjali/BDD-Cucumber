///<reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('i visit google page', () => {
    cy.visit('https://www.google.com/')
})
When('i see {string} in title', (title) => {
    cy.title().should('contain', title)
})

Then('i see {string} in url', (url) => {
    cy.url().should('contain', url)
})

//lambda test

Given('i visit lambda test web login page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})
When('i enter {word} and {word}', (uemail, pw) => {
    cy.loginLT(uemail, pw)
})
// And('i click on login button',()=>{
//     cy.get('[value="Login"]').click()
// })

Then('url contain {string}', (url) => {
    cy.url().should('contain', url)
})