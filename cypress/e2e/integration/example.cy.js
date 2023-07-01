describe('Funcionalidades da Agenda de Contatos', () => {
    it('Adicionar contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      cy.get('input[placeholder="Nome"]').type('John Doe');
      cy.get('input[placeholder="E-mail"]').type('johndoe@example.com');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('button.adicionar[type="submit"]').click();
      cy.contains('John Doe').should('exist');
    });
  
    it('Editar contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
  
      cy.get('input[placeholder="Nome"]').clear().type('John Smith');
      cy.get('input[placeholder="E-mail"]').clear().type('johnsmith@example.com');
      cy.get('input[placeholder="Telefone"]').clear().type('987654321');
  
      cy.get('.alterar').click();
  
      cy.contains('John Smith').should('exist');
      
    });

    it('Remover contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
    });
  });
  