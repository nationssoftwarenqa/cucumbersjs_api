const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
//const {expect} = require('chai');
const webdriver = require('selenium-webdriver');
const request = require('https');
const {By} = require('selenium-webdriver');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

let driver;
Before(function () { driver = new webdriver.Builder().forBrowser('chrome').build();})
url = "https://www.bible.com/_next/data/zuE4uZFUBpNQPgiA3wtoO/en/bible/111/mrk.16.17.json?versionId=111&usfm=mrk.16.17"

const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);



//Given('I visit bible app api', async function () {
//    fetch(url)
//      .then((response) => response.json())
//      .then((json) => console.log(json));
//            
//    });

    

Given('I visit bible app api', async function () {   
    xhr.open("GET", url);
    xhr.send();    
    xhr.onreadystatechange = function() {
        ("State: " + this.readyState);        
        if (this.readyState === 4) 
            {
            //console.log("Complete.\nBody length: " + this.responseText.length);
           let resp = JSON.parse(this.responseText);
           let verses = resp.pageProps.verses[0]
            console.log(verses);
            console.log(verses.reference);
            console.log(verses.content);
        }
    };
});



