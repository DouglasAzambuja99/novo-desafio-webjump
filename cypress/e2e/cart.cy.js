/// <reference types="Cypress" />

import JacketsMen from '../support/page_objects/jacketsMen';
import Cart from '../support/page_objects/cart'

describe('Add item to the cart' , () =>{
    beforeEach(() =>{
        JacketsMen.visit();
        JacketsMen.addItemCart('XS', 'Orange');
    })

    it('should add a new item to the cart and verify the previews cart', () =>{
        JacketsMen.getValueCart()
            .contains('1')
            .click()
        JacketsMen.getDetailsItem()
             .contains('XS')
        JacketsMen.getDetailsItem()
             .contains('Orange')
    })

    it('should validate order total in cart details', () => {
        cy.contains('View and Edit Cart')
            .click({force: true})
        Cart.getColumPrice()
            .contains('$42.00')
        Cart.getColumSubtotal()
            .contains('$42.00');
        Cart.getOrderTotal()
            .contains('$42.00')        
    })

    it('should change quantity itens and verify total order', () => {
        cy.contains('View and Edit Cart')
            .click({force: true});
        Cart.getColumPrice()
            .contains('$42.00');
        Cart.getColumSubtotal()
            .contains('$42.00');
        Cart.getQtyInput()
            .clear()    
            .type('2{enter}');
        Cart.getColumSubtotal()
            .contains('$84.00');
        Cart.getOrderTotal()
            .contains('$84.00')   
    })

    it('should remove item from cart', () => {
        cy.contains('View and Edit Cart')
            .click({force: true})
        Cart.getDeleteItemButton()
            .click()
        cy.get('.cart-empty')
            .should('be.visible')
            .and('have.text', '\nYou have no items in your shopping cart.\nClick here to continue shopping. \n')
    })

    it('should edit item from cart', () => {
        cy.contains('View and Edit Cart')
            .click({force: true})
        Cart.getEditItemButton()
            .click();
        cy.url()
            .should('match', /\/checkout\/cart\/configure\/id\/\d+\/product_id\/\d+\//);
        JacketsMen.getSizeItem('M');
        JacketsMen.getColorItem('Red');
        JacketsMen.getUpdateButton()
            .click(); 
        JacketsMen.getDetailsItem()
            .contains('M');
        JacketsMen.getDetailsItem()
            .contains('Red'); 
        Cart.getItemImage()
            .should('have.attr', 'src')
            .then((src) => {
                const newSrc = src.replace(/mj01/, 'data');
                expect(newSrc).to.include('data-red_main_1.jpg');
            })
    })
})
