//test suite
describe('Login Page', () =>{
  beforeEach(() =>{
    cy.visit('http://localhost:3000');
  });


  //Positive testing
  it('should login with valid credentials', () =>{
    //Arrange
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.on('window:alert', (txt) =>{
      expect(txt).to.contains('Login Successful!')
    });
  });

  //Negative testing
  it('should display error message if wrong credentials', () =>{
    //Arrange
    cy.get('#email').type('test@examples.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.get('#error-message').should(
      'contain',
      'Invalid email or password'
  );
});
it('Should only allow 1 submit', () =>{
  //Arrange
  // cy.get('#email').type('test@examples.com');
  //   cy.get('#password').type('password123');

    //Act
    for(var i = 0; i < 3; i++){
      cy.get('#login-button').click();
    }

  // cy.get('#submitCount').should('not.have.text', '1');11111
  cy.get('window:alert', (txt) =>{
    expect(txt).to.equal('You have exceeded the maximum number of attempts')});
  });
});
