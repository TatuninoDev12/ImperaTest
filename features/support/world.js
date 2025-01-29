const {
  setWorldConstructor,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");

class CustomWorld {
  constructor({ attach }) {
    this.driver = new Builder().forBrowser("chrome").build();
    this.attach = attach;
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(30 * 1000);
