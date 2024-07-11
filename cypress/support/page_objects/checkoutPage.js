class CheckoutPage {
    visit(){
        cy.visit('/checkout/#shipping')
    }

    getStreetNameField(){
        return cy.get('[name="street[0]"]', { timeout: 10000 })
    }

    getCountrySelect(){
        return cy.get('[name="country_id"]')
    }

    getRegionSelect(){
        return cy.get('[name="region_id"]')
    }
    
    getCityField(){
        return cy.get('[name="city"]')
    }

    getPostcodeField(){
        return cy.get('[name="postcode"]')
    }

    getTelephoneField(){
        return cy.get('[name="telephone"]')
    }
}
export default new CheckoutPage();