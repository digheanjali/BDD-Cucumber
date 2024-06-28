export default class myclass {

    selectors = {
        CUurl: 'https://webdriveruniversity.com/Contact-Us/contactus.html',
        firstname: '[name="first_name"]',
        lastname: '[name="last_name"]',
        email: '[name="email"]',
        msg: '[name="message"]',
        submitbtn: '[type="submit"]',
        reserbtn: '[type="reset"]',
        thankyoumsg: 'h1'
    }


    visiturl() {
        cy.visit(this.selectors.CUurl)
    }

    btnclick(css) {
        cy.get(css).click()
    }


    EnteruserDetails(data) {

        cy.get(this.selectors.firstname).type(data.fn)
        cy.get(this.selectors.lastname).type(data.ln)
        cy.get(this.selectors.email).type(data.em)
        cy.get(this.selectors.msg).type(data.comments)

    }


    validateText(css, text) {
        cy.get(css).should('have.text', text)
    }
}