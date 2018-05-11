'use strict';

const assert = require('assert');
const LandingPage = require('../lib/landing-page');
const { By, until, getBrowser } = require('../lib/webdriver-util');
const { TARGET_HOST, BROWSER, JEST_TIMEOUT } = process.env;
const WAIT_TIME = 3000;

describe("Todo App", () => {
  jest.setTimeout(JEST_TIMEOUT);
  let browser;
  let landingPage;
  const inputTodo = "Wake up in the morning";  

  beforeAll(async() => {
    browser = await getBrowser(BROWSER);
    landingPage = new LandingPage(browser);
    await browser.get(TARGET_HOST);
  });
  
  afterAll(async() => {
    if (browser) {
      await browser.quit();
    }
  });

  beforeEach(async() => {
    await browser.sleep(WAIT_TIME);
    const todoItemElements = await landingPage.getTodoItemElements();
    if (todoItemElements.length === 0) {
      await landingPage.doCreateTodo(inputTodo, WAIT_TIME);
    }
  });

  it("creates a new Todo Item", async() => {
    try{      
      const todoItemElement = await landingPage.getTodoItemElement(1);
      assert.notEqual(todoItemElement, null);

      const todoItemTextElement = await landingPage.getTodoItemTextElement(todoItemElement);
      assert.notEqual(todoItemTextElement, null);

      const todoItemText = await todoItemTextElement.getText();
      assert.strictEqual(todoItemText, inputTodo);

      const todoItemTickboxElement = await landingPage.getTodoItemTickboxElement(todoItemElement);
      assert.notEqual(todoItemTickboxElement, null);

      const isTodoItemTickboxChecked = await todoItemTickboxElement.isSelected();
      assert.equal(isTodoItemTickboxChecked, false);

      const todoStatsElement = await landingPage.getTodoStatsElement();
      assert.notEqual(todoStatsElement, null);

      const todoStatNumberElement = await landingPage.getTodoNumberStatElement(todoStatsElement);
      assert.notEqual(todoStatNumberElement, null);

      const todoStatNumber = await todoStatNumberElement.getText();
      assert.strictEqual(todoStatNumber, "1");

      const todoWordsStatElement = await landingPage.getTodoWordsStatElement(todoStatsElement);
      assert.notEqual(todoWordsStatElement, null);

      const todoStatWords = await todoWordsStatElement.getText();
      assert.strictEqual(todoStatWords, "items");

    } catch(err) {
      assert.fail(err);
    }
  });

  it(`selects a todo item`, async() => {
    try {
      await landingPage.selectTodoItem(1, WAIT_TIME);

      const todoItemElement = await landingPage.getTodoItemElement(1);

      // Assert that the label of the selected Todo item is crossed out
      const className = await todoItemElement.getAttribute("class");
      assert.notEqual(className, null);
      assert.ok(className.includes('done-true'));

      // the stats label should display `0 items left`
      const todoStatsElement = await landingPage.getTodoStatsElement();
      const todoStatNumberElement = await landingPage.getTodoNumberStatElement(todoStatsElement);

      const todoStatNumber = await todoStatNumberElement.getText();
      assert.strictEqual(todoStatNumber, "0");
      
      // a link labeled as `Clear 1 completed item` is shown
      const clearSelectedItems = await landingPage.getClearSelectedItemsLink();
      let clearText = await clearSelectedItems.getText();
      clearText = clearText.trim();
      assert.strictEqual(clearText, "Clear 1 completed item");
    }
    catch(err) {
      assert.fail(err);
    }
  });

  it(`remove a todo item`, async() => {
    try{
      await browser.sleep(WAIT_TIME);      
      const clearSelectedItems = await landingPage.getClearSelectedItemsLink();      
      await clearSelectedItems.click();
      await browser.sleep(WAIT_TIME);

      const todoItemElements = await landingPage.getTodoItemElements();
      assert.strictEqual(todoItemElements.length, 0);
    } catch(err){
      assert.fail(err);
    }
  });
});
