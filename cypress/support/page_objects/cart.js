class Cart {
    visit(){
        cy.visit('/checkout/cart/');
    }

    getValueItem(){
        cy.get('[class="price-wrapper "]')
            .invoke('attr', 'data-price-amount');
    }

    getProceedToCheckoutButton(){
        return cy.get('#top-cart-btn-checkout');
    }

    getFirstShippingMethod(){
        return cy.get('[class="radio"]').first();
    }

    getNextButton(){
        return cy.get('.button.action.continue.primary');
    }

    getTotalSub(){
        return cy.get('[data-th="Cart Subtotal"]');
    }
    
    getPlaceOrderButton(){
        return cy.get('.action.primary.checkout');
    }

    getOrderTotal(){
        return cy.get('[data-th="Order Total"]');
    }

    getColumPrice(){
        return cy.get('.col.price');
    }

    getColumSubtotal(){
        return cy.get('.subtotal');
    }

    getQtyInput(){
        return cy.get('[id^=cart-][id$=-qty]');
    }

    getDeleteItemButton(){
        return cy.get('.action-delete');
    }

    getEditItemButton(){
        return cy.get('.action-edit');
    }

    getItemImage(){
        return cy.get('.product-image-photo').eq(1)
    }
}
export default new Cart();