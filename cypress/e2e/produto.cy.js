/// <reference types="cypress" />

describe ('Funcionalidade Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')  
    });
   
    it ('deve selecionar produto com sucesso', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.eq(0)
        .contains('Abominable Hoodie')
        .click()
    })
it ('deve adicionar um produto ao carrinho', () => {
    var quantidade = 5
    cy.get('[class="product-block grid"]')
    .contains('Abominable Hoodie')
    .click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear ().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)

    



})
})