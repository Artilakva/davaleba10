describe('existing', () => {
  it('Test Case 5: Register User with existing email', () => {
    cy.visit('http://automationexercise.com')

const email ='artilakva+8@gmail.com'
const name = 'Ann'

  
    //3. Verify that home page is visible successfully
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    //4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    //5. Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should('have.text', 'New User Signup!')
    //6. Enter name and already registered email address
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)
    //7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    //8. Verify error 'Email Address already exist!' is visible
    cy.get('.signup-form > form > p').should('have.text','Email Address already exist!')
    
   


  })
})