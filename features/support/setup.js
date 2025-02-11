const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);

module.export = {
    setDefaultTimeout,
    exp
}
