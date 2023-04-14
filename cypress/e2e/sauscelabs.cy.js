/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe ('Teste E2E Saucelabs', () => {
  
    it ('Deve fazer o pedido certo de ponta a ponta' , () => {

        cy.visit('https://www.saucedemo.com/')
        
        //login
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //selecionar produtos

        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.get('#item_0_title_link > .inventory_item_name').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        
        //visitar carrinho

        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type(faker.name.firstName())
        cy.get('[data-test="lastName"]').type(faker.name.lastName())
        cy.get('[data-test="postalCode"]').type(faker.random.alphaNumeric())
        cy.get('[data-test="continue"]').click()

        //finalizar
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain', "Thank you for your order")
    })



    })

    