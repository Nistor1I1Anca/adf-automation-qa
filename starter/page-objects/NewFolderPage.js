var NewFolderPage = function() {
    this.newButton = element(by.css('.app-create-menu .mat-raised-button'));
    this.createNewFolderDialog = element(by.css('.mat-dialog-container'));
    this.createNewFolderButton = element(by.id('app.create.folder'));
    this.folderNameInput = element(by.id('adf-folder-name-input'));
    this.createFolderButton = element(by.id('adf-folder-create-button'));
    this.cancelButton = element(by.id('adf-folder-cancel-button'));
    this.informativeMessage = element(by.css('.mat-simple-snackbar span'));
    var until = protractor.ExpectedConditions;

    this.createNewFolder = function(folderName) {
        browser.wait(until.presenceOf(this.newButton), 5000, 'Element "'+ this.folderNameInput +'" taking too long to appear in the DOM');
        this.newButton.click();
        this.createNewFolderButton.click();
        browser.wait(until.presenceOf(this.folderNameInput), 5000, 'Element "'+ this.folderNameInput +'" taking too long to appear in the DOM');

        //insert folder name
        this.folderNameInput.sendKeys(folderName);
        this.createFolderButton.click();
    };

    this.clickOnCancelButton = function (){
        this.cancelButton.click();
    }

    this.getInformativeMessage = function (){
        return this.informativeMessage;
    }

    this.getNewFolderDialog = function (){
        return this.createNewFolderDialog;
    }
};
module.exports = NewFolderPage;
