const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {fs} = require('fs');
const webdriver = require('selenium-webdriver');
const request = require('https');
const {By} = require('selenium-webdriver');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
const fortest = require('/Users/maame/Documents/nationssoftwarenqa/cucumbersjs_api/resourses/fortestsupport.js');

let driver;
Before(function () { driver = new webdriver.Builder().forBrowser('chrome').build();})

const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);

    

Given('I GET a bible verse via api', async function () {   
    xhr.open("GET", fortest.url);
    xhr.send();    
    xhr.onreadystatechange = function() {
        ("State: " + this.readyState);        
        if (this.readyState === 4) 
            {
            //console.log("Complete.\nBody length: " + this.responseText.length);
            let resp = JSON.parse(this.responseText);
            let verses = resp;
            let Verse  = verses.pageProps.results.verses[0].human;
            let Script = verses.pageProps.results.verses[0].content;
            let Version = verses.pageProps.results.verses[0].version_local_abbreviation;

            console.log('Verse   ==>', Verse);
            console.log('Script  ==>', Script);
            console.log('Version ==>', Version);
        }
    };
});



