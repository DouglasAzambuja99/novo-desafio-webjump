class LoginPage {
  visit() {
    cy.visit('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLm51Ymx1ZS5jby51ay8%2C/');
  }

  fillUsername(username) {
    cy.get('#email')
      .type(username);
  }

  fillPassword(password) {
    cy.get('#pass')
      .type(password);
  }

  submit() {
    cy.get('#send2')
      .click({force:true});
  }

  getEmptyFieldsError() {
    return cy.get('.message-error');
  }

  getErrorEmailMessage() {
    return cy.get('#email-error');
  }

  getErrorPasswordMessage() {
    return cy.get('#pass-error');
  }

  getErrorSignInMassage(){
    return cy.get('[class="page messages"]')
  }

  getCreateAccountButton(){
      return cy.get('.action.create.primary')
  }

  // Método para realizar o login diretamente, usando os métodos anteriores
  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}
export default new LoginPage();