'use strict';

require('chromedriver');
require('geckodriver');

const { Builder, By, until, promise, Key } = require('selenium-webdriver');

module.exports = {
  By: By,
  until: until,
  getBrowser: (browserName) => {
    return new Builder().forBrowser(browserName).build();
  },
  Key: Key
};