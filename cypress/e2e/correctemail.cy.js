describe('template spec', () => {
  it('Test Case 2: Login User with correct email and password', () => {
    cy.visit('http://automationexercise.com')

const email = 'artilakva+1@gmail.com'
   // 1. Launch browser
   
    //3. Verify that home page is visible successfully
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
   // 4. Click on 'Signup / Login' button
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    //5. Verify 'Login to your account' is visible
    cy.get('.login-form > h2').should('have.text','Login to your account')
    //6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type('221133')


    //7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    //8. Verify that 'Logged in as username' is visible
    cy.get('.nav > :nth-child(10)').should('be.visible')
    //9. Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    //10. Verify that 'ACCOUNT DELETED!' is visible
    cy.get('b').should('be.visible')







  })
})