/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré-cadastro', () => {

  
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  
    });
    it ('deve fazer login com sucesso', () => {

        cy.get('.register > :nth-child(1) > label').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
cy.get('#main > .woocommerce').should('contain', 'A partir')
cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click ()
   cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/edit-account/')
   cy.get('#account_first_name').type('Priscila')
   cy.get('#account_last_name').type ('Teste')
   cy.get('#account_display_name').type('PriTeste')
   cy.get('.woocommerce-Button').click()
   cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'painel de controle')

    })

    it ('deve exibir uma mensagem de erro ao inserir usuario já cadastrado' , () => {
       
        cy.get('.register > :nth-child(1) > label').type('teste20@teste.com')
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should('contain', 'conta já está registrada')
    })

})
