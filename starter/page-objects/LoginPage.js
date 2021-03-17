var LoginPage = function() {

    this.usernameInput = element(by.id('username'));
    this.passwordInput = element(by.id('password'));
    this.loginButton = element(by.id('login-button'));
    var until = protractor.ExpectedConditions;

    this.loginIntoWebsite = function(username, password) {
        this.usernameInput.sendKeys(username);
        this.passwordInput.sendKeys(password);
        this.loginButton.click();
    };
};
module.exports = LoginPage;
