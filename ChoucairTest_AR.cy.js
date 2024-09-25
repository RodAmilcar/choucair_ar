describe ('Reto Técnico', () => {
    it('recruitment Workflow', () => 
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.contains("Orange")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click()       
       
        cy.contains("Recruitment")
        .click({ force: true })    
        //cy.get(':nth-child(5) > .oxd-main-menu-item')
        cy.get(':nth-child(5) > .oxd-main-menu-item', { timeout: 10000 })
        .should('exist') 
        .click({ force: true }); 
        
       //Insertando valores 
       cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible');
       cy.wait(3000)
       cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.wait(1000)
      
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Gabriel');
      cy.wait(1000)
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('David');
      cy.wait(1000)
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Medina');
      cy.wait(1000)
      cy.get(':nth-child(2) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible');
      cy.get('.oxd-select-text').click(); 
      cy.get('.oxd-select-dropdown > :nth-child(2)').click();
      cy.wait(1000)
      cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible');
      cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('gmedina@choucair.com');

      cy.wait(1000)
      //cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').should('be.visible');

     cy.scrollTo('bottom'); 
     cy.get('.oxd-button--secondary').click();
     
     cy.wait(1000)
     cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click();
     cy.wait(2000)
     cy.get('.orangehrm-container').should('be.visible');
     
     //Aquí valido el estatus:
     cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(5) > div')
     .scrollIntoView()  
     .should('have.text', 'Active'); 


    })
})