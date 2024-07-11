/// <reference types="Cypress" />
import SignUpPage from '../support/page_objects/signUpPage';
import { faker } from '@faker-js/faker';

describe('Sign Up Test', () =>{
  const randomEmail = faker.internet.email();
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();

  beforeEach(() =>{
    SignUpPage.visit();
  })

  it('should display an error for weak password', () => {
    SignUpPage.createAccount(randomFirstName, randomLastName, randomEmail, 'weak.', 'weak.');
    SignUpPage.getErrorPasswordMessage()
        .should('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.');
  });

  it('should display an error for non-matching passwords', () => {
    SignUpPage.createAccount(randomFirstName, randomLastName, randomEmail, 'Abcde123.', 'notTheSame.');
    SignUpPage.getErrorPasswordConfirmationMessage()
        .should('contain', 'Please enter the same value again.');
  });

  it('should signup successfully with valid data', () => {
    SignUpPage.createAccount(randomFirstName, randomLastName, randomEmail, 'Abcde123.', 'Abcde123.');
    SignUpPage.getSuccessMessage()
      .should('have.text', '\nThank you for registering with Main Website Store.\n')
    cy.url().should('include', '/customer/account/')
  });

  it('should display an error for account already exists', () => {
    SignUpPage.createAccount('Doug','Duplicate','doug.azamb@example.com','StrongPass123!','StrongPass123!')
    SignUpPage.getErrorDuplicateEmail()
        .contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
  });
})