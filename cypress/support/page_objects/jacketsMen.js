class JacketsMen {
    visit(){
        cy.visit('/men/tops-men/jackets-men.html')
    }

    getFirstItemLink(){
        cy.get('.product-item-link')
            .first()
            .click();
    }

    getSizeItem(size){
        cy.get('[class="swatch-attribute size"]')
            .contains(`${size}`)
            .click();
    }

    getColorItem(color){
        cy.get(`[data-option-label="${color}"]`)
            .click();
    }

    getValueColor(){
        cy.get('#option-label-color-93-item-56')
            .invoke('attr', 'data-option-label');
    }

    getAddToCartButton(){
        cy.get('#product-addtocart-button')
            .click();
    }

    getValueCart(){
        return cy.get('.counter-number');
    }

    getDetailsItem(){
        return cy.get('[class="product options list"]');
    }

    getUpdateButton(){
        return cy.get('#product-updatecart-button');
    }

    addItemCart(size, color){
        this.getFirstItemLink();
        this.getSizeItem(size);
        this.getColorItem(color);
        this.getAddToCartButton();
    }
}
export default new JacketsMen();