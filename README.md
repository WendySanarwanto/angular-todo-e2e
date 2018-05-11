# angular-todo-e2e

A demonstration of e2e test using Jest & Selenium Web Drive, against angular todo app.

## 1. Setup environment

* Ensure that you have installed these software in your local machine:

  * Latest version of [Node.js](https://nodejs.org/en/).
  * [Git client](https://git-scm.com/downloads).

* Clone this repository into your local machine through running this command: `git clone https://github.com/WendySanarwanto/angular-todo-e2e.git`.

* On the command prompt, change directory to the location of cloned repository then run `npm install` command for installing required dependency libraries.

## 2. Running the e2e tests

In the `package.json` file, we have prepared various npm scripts for executing the e2e test based on how do you want the e2e should be running (e.g. should it run on chrome, on firefox, or both, should it open the test report on browser after a test run is finished.). 

* Run `npm run e2e` command, for running the e2e tests on both on both Chrome & Firefox browsers, simultaneously.

* If you want to run the end-to-end testing on Chrome browser only, run `npm run e2e:chrome` command.

* If you want to run the end-to-end testing on Firefox browser only, run `npm run e2e:firefox` command.

* If you're a windows user and want to display the test report on your chrome browser, run `report:win:chrome` command after executing a test. Or, you can just simply run `e2e:chrome:win:report` command to execute the tests and then open the test report on your chrome browser.

* If you're a windows user and want to display the test report on your firefox browser, run `report:win:firefox` command after executing the tests. Or, you can just simply run `e2e:firefox:win:report` command to execute the tests and then open the test report on your firefox browser.