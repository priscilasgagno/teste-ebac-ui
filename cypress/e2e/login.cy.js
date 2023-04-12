/// <reference types="cypress" />
context ('Funcionalidade Login', () => {
    it ('deve fazer login com sucesso', () => {
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()
cy.get('#main > .woocommerce').should('contain', 'Pedidos')
    })

    it ('deve exibir uma mensagem de erro ao inserir usuario invalido' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluebac@teste.com')
cy.get('#password').type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error > li').should('contain', 'desconhecido')
    })

    it ('deve exibir uma mensagem de erro ao inserir senha invalida' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
cy.get('#password').type('teste@teste')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error > li').should('contain', 'incorreta')
    })   
})