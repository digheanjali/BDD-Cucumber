export default class AExercise {

    selectors = {

        AEurl: 'https://automationexercise.com',
        loginbtn: 'a[href="/login"]',
        username: '[name="name"]',
        useremail: '[data-qa="signup-email"]',
        signupbtn: '[data-qa="signup-button"]',
        titleMr: '[value="Mr"]',
        titleMrs: '[value="Mrs"]',
        password: '[id="password"]',
        dd: '[name="days"]',
        mm: '[name="months"]',
        yy: '[id="years"]',
        cheakbox1: '[type="checkbox"]',
        cheakbox2: '[name="optin"]',
        firstname: '[name="first_name"]',
        lastname: '[name="last_name"]',
        company: '[name="company"]',
        address1: '[name="address1"]',
        address2: '[name="address1"]',
        country: '[name="country"]',
        state: '[id="state"]',
        city: '[id="city"]',
        zipcode: '[name="zipcode"]',
        mobileno: '[id="mobile_number"]',
        AccCreate: '[data-qa="create-account"]',
        createAccountText: '[data-qa="account-created"]>b',
        logout: 'a[href="/logout"]',
        loginemail: '[data-qa="login-email"]',
        loginpassword: '[data-qa="login-password"]',
        login: '[data-qa="login-button"]',
        logintextvalidation: 'a>b'

    }

    visiturl() {
        cy.visit(this.selectors.AEurl)
    }

    btnclick(css) {
        cy.get(css).click()
    }

    newUserSignup(user) {
        cy.get(this.selectors.username).type(user.username)
        cy.get(this.selectors.useremail).type(user.useremail)

    }

    accountinfo(title, user) {
        cy.get(title).check()
        cy.get(this.selectors.password).type(user.password)
        cy.get(this.selectors.dd).type(user.dd)
        cy.get(this.selectors.mm).type(user.mm)
        cy.get(this.selectors.yy).type(user.yy)
        cy.get(this.selectors.cheakbox1).check()
        cy.get(this.selectors.cheakbox2).check()
        cy.get(this.selectors.firstname).type(user.firstname)
        cy.get(this.selectors.lastname).type(user.lastname)
        cy.get(this.selectors.company).type(user.company)
        cy.get(this.selectors.address1).type(user.address1)
        cy.get(this.selectors.address2).type(user.address2)
        cy.get(this.selectors.country).select(user.country)
        cy.get(this.selectors.state).type(user.state)
        cy.get(this.selectors.city).type(user.city)
        cy.get(this.selectors.zipcode).type(user.zipcode)
        cy.get(this.selectors.mobileno).type(user.mobileno)
        cy.get(this.selectors.AccCreate).click()



    }
    validatetext(locators, text) {
        cy.get(locators).should('contain', text)
    }
    LoginToYourAccount(user) {
        cy.get(this.selectors.loginemail).type(user.useremail)
        cy.get(this.selectors.loginpassword).type(user.password)
        cy.get(this.selectors.login).click()

    }
}