/// <reference types="Cypress" />

import SignUpPage from '../support/page_objects/signUpPage';
import JacketsMen from '../support/page_objects/jacketsMen';
import Cart from '../support/page_objects/cart';
import CheckoutPage from '../support/page_objects/checkoutPage';
import { faker } from '@faker-js/faker';

describe('Complete purchase test' , () =>{
    const randomEmail = faker.internet.email();
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    before(() =>{
        SignUpPage.visit();
        SignUpPage.createAccount(randomFirstName, randomLastName, randomEmail, 'Abcde123.', 'Abcde123.');
    })

    it('should complete purchase successfuly', () => {
        JacketsMen.visit();
        JacketsMen.addItemCart('XS', 'Orange');
        JacketsMen.getValueCart()
            .contains('1')
            .click();

        CheckoutPage.visit();

        CheckoutPage.getStreetNameField()
            .type(faker.location.street());
        CheckoutPage.getCountrySelect()
            .select('Brazil')
        CheckoutPage.getRegionSelect()
            .select('Santa Catarina')
        CheckoutPage.getCityField()
            .type('Florianópolis')
        CheckoutPage.getPostcodeField()
            .type(faker.location.zipCode())
        CheckoutPage.getTelephoneField()
            .type(faker.phone.number())
        
        Cart.getFirstShippingMethod()
            .check();

        Cart.getNextButton()
            .click();

        Cart.getTotalSub()
             .contains('$42.00');

        Cart.getOrderTotal()
            .contains('$47.00');

        Cart.getPlaceOrderButton()
            .click()

        cy.get('.message-success > div', {timeout: 10000})
            .should('have.text', 'Thank you for registering with Main Website Store.')
    })
})
