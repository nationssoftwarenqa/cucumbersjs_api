const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
//const {expect} = require('chai');
const webdriver = require('selenium-webdriver');
const request = require('https');
const {By} = require('selenium-webdriver');

const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);

let driver;
Before(function () {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
})


Given('I visit bible app api', async function () {
    this.response = request.get('https://www.bible.com/_next/data/zuE4uZFUBpNQPgiA3wtoO/en/search/bible.json?query=Mark+14%3A66&category=bible/');
    console.log(this.response)
});


    
Then('the response status code should be {int}', function (statusCode) {
      expect(response.status).toEqual(statusCode);
});    