var PersonalFilesPage = require('../page-objects/PersonalFilesPage.js');
var LoginPage = require('../page-objects/LoginPage.js');
var NewFolderPage = require('../page-objects/NewFolderPage.js');

describe('ADF Demo App', function() {
    var personalFilesPage = new PersonalFilesPage();
    var loginPage = new LoginPage();
    var newFolderPage = new NewFolderPage();
    var until = protractor.ExpectedConditions;

    it('create folder functionality with a name that already exists', function() {
        const FILE_NAME = 'Nistor1I1Anca';

        //access website
        browser.get(globalVariables.baseUrl);

        //login into website
        loginPage.loginIntoWebsite(globalVariables.username, globalVariables.password);

        //create a new folder
        newFolderPage.createNewFolder(FILE_NAME);
        browser.wait(until.invisibilityOf(newFolderPage.getNewFolderDialog()), 5000);
        expect(personalFilesPage.getFileByName(FILE_NAME).isDisplayed()).toBe(true);

        //try to create a new folder with the same name as before
        newFolderPage.createNewFolder(FILE_NAME);
        browser.wait(until.visibilityOf(newFolderPage.getInformativeMessage()), 10000, 'Element "'+ newFolderPage.getInformativeMessage() +'" taking too long to appear in the DOM');

        //check if the message is correctly displayed
        expect(newFolderPage.getInformativeMessage().isDisplayed()).toBe(true);

        //click on cancel button
        newFolderPage.clickOnCancelButton();

        //delete a file by its name
        personalFilesPage.deleteAFileByName(FILE_NAME);

        //check if the file was deleted successfully and there is no file with FILE_NAME in the list
        personalFilesPage.getAllFilesCreated().each(function(element) {
            element.getAttribute('aria-label').then(function (label) {
                expect(label).not.toBe(FILE_NAME);
            });
        });
    });
});