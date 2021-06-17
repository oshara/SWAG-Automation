

// describe('Login to SWAG_labs',function(){
// it('visit the URL',function(){
//     cy.wait(6000).visit('https://www.saucedemo.com/')
// })
// it('user login to the Application',function(){
    
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('#login-button').click()

//  })
//  it('User add to cart a item',function(){
//      cy.get("#add-to-cart-sauce-labs-backpack").click()
//  })
//  it('User click the cart icon',function(){
//      cy.get('#shopping_cart_container').click()
//  })
//  it()
// })

describe("login to demoqa.com",function(){
    it('visit the URL',function(){
        cy.visit('https://demoqa.com/')
    })
    it('navigate to Elements section',function(){
        cy.get('.category-cards > :nth-child(1)').click()
        //cy.get(':nth-child(1) > .group-header > .header-wrapper').click()
    })

    it('navigate to Text box section',function(){
        cy.get('#item-0').click()
    })

    it('fill the details of the form',function(){
        cy.get('#userName').type('Lisa')
        cy.get("#userEmail").type('test@gmail.com')
        cy.get('#currentAddress').type('No18,Flowers Road,Colombo')
        cy.get('#permanentAddress').type('No14,Hill lane,Colombo')
        cy.get("#submit").click()
    })

    it("navigate to Check box section",function(){
        
    })
    
})