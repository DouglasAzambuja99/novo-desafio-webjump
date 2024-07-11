class SignUpPage {

    visit() {
        cy.visit('/customer/account/create/');
      }

    fillFirstName(firstName){
        cy.get('#firstname')
            .type(firstName);
    }

    fillLastName(lastName){
        cy.get('#lastname')
            .type(lastName)
    }

    fillEmail(email){
        cy.get('#email_address')
            .type(email);
    }

    fillPassword(password){
        cy.get('#password')
            .type(password);
    }

    fillPasswordConfirmation(password){
        cy.get('#password-confirmation')
            .type(password);
    }

    getErrorPasswordMessage(){
        return cy.get('#password-error');
    }

    getErrorPasswordConfirmationMessage(){
        return cy.get('#password-confirmation-error');
    }

    getErrorDuplicateEmail(){
        return cy.get('[class="page messages"]');
    }

    getSuccessMessage(){
        return cy.get('.message-success')
    }

    submit(){
        cy.get('button[type="submit"]')
            .contains('Create an Account')
            .click();
    }

    createAccount(firstName, lastName, email, password, passwordConfirm){
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillEmail(email);
        this.fillPassword(password);
        this.fillPasswordConfirmation(passwordConfirm);
        this.submit();
    }      
}
export default new SignUpPage();