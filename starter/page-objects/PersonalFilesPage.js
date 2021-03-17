var PersonalFilesPage = function() {

    this.toolbarMoreButton = element(by.id('app.toolbar.more'));
    this.deleteButton = element(by.id('app.toolbar.delete'));
    this.rows = element.all(by.css('.adf-datatable-body adf-datatable-row'));
    var until = protractor.ExpectedConditions;

    this.deleteAFileByName = function (fileName) {
        var firstRow = this.getFileByName(fileName);
        firstRow.click();

        browser.wait(until.presenceOf(this.toolbarMoreButton), 5000, 'Element "' + this.toolbarMoreButton + '" taking too long to appear in the DOM');
        this.toolbarMoreButton.click();

        browser.wait(until.presenceOf(this.deleteButton), 5000, 'Element "' + this.deleteButton + '" taking too long to appear in the DOM');
        this.deleteButton.click();
    };

    this.getFileByName = function (fileName) {
        return element(by.css('.adf-datatable-body adf-datatable-row[aria-label="' + fileName + '"]'));
    }

    this.getAllFilesCreated = function () {
        return this.rows;
    }
}

module.exports = PersonalFilesPage;
