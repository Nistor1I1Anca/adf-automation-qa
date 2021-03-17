## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies
- `npm install -g webdriver-manager` to install webdriver-manager
- `webdriver-manager update` to download the selenium server jar and chromedriver binary
- `webdriver-manager start` to start the selenium server

## Description
- run tests: `protractor conf.js`

## Description
- in page-objects folder there are all page objects with web elements used in the tests
- in specs folder there are all the specs/tests for the app
- in conf.js file there aer some configurations for chrome and jasmine
- in globalVariables.js there are the global variables that we used in the specs