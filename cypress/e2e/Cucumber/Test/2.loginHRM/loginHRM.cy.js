///<reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('navigate to the OHRM web site', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('i enterd username and password', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('[name="username"]').type(element.username)
        cy.get('[name="password"]').type(element.password)

    });

})

And('click on login button', () => {
    cy.get('.orangehrm-login-button').click()
})

Then('validate for valid user page', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('contain', 'Dashboard')
})



//scenario tc002

When('i enterd {word} and {word}', (un, pw) => {

    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pw)


})


//scenario TC003

When('I enter {word} and {word}', (un, pw) => {
    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pw)
})

Then('validate for valid and invalid {word}', (cri) => {
    if (cri == 'valid') {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    }
    else if (cri == 'invalid') {
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    }
})

//Scenario TC004

When('I enter for {string} and {string}', (un, pw) => {
    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pw)
})

Then('validate for value valid and invalid {string}', (cri) => {
    if (cri == 'valid') {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    }
    else if (cri == 'invalid') {
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    }
})