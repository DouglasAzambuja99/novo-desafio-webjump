/// <reference types="Cypress" />
import loginPage from '../support/page_objects/loginPage';
import SignUpPage from '../support/page_objects/signUpPage';
import { faker } from '@faker-js/faker';

describe('Login Test' , () =>{
    const randomEmail = faker.internet.email();
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    beforeEach(() =>{
        loginPage.visit();
    })

    it('should display an error for empty fields', () => {
        loginPage.submit();
        loginPage.getEmptyFieldsError()
            .should('have.text', '\nA login and a password are required.\n')
    })

    it('should display an error for invalid email', () => {
        loginPage.fillUsername('invalidEmail');
        loginPage.fillPassword('invalidPassword');
        loginPage.submit();
        loginPage.getErrorEmailMessage()
            .should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })

    it('should display an error for not register user', () => {
        loginPage.fillUsername(randomEmail);
        loginPage.fillPassword('123123');
        loginPage.submit();
        loginPage.getErrorSignInMassage()
            .should('have.text', '\n\n\n\n\nThe account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.\n\n\n\n\n\n\n')
    })

    it('should be able to log in correctly', () => {
       loginPage.getCreateAccountButton()
            .click();
        SignUpPage.createAccount(randomFirstName, randomLastName, randomEmail, randomEmail, 'Abcde123.', 'Abcde123.');
        cy.contains('Sign Out')
            .click({force: true});
        loginPage.visit();
        loginPage.fillUsername(randomEmail);
        loginPage.fillPassword('Abcde123.');
        loginPage.submit();
        cy.get('.message-success')
            .contains('Thank you for registering with Main Website Store.')
    })
})
