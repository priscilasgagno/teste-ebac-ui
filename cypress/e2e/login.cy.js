/// <reference types="cypress" />
context ('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  
    });
    it ('deve fazer login com sucesso', () => {

cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()
cy.get('#main > .woocommerce').should('contain', 'Pedidos')
    })

    it ('deve exibir uma mensagem de erro ao inserir usuario invalido' , () => {
       
        cy.get('#username').type('aoupotr@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error > li').should('contain', 'desconhecido')
    })

    it ('deve exibir uma mensagem de erro ao inserir senha invalida' , () => {
      
        cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error > li').should('contain', 'incorreta')
    })   
})