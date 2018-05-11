'use strict';

const assert = require('assert');
const LandingPage = require('../lib/landing-page');
const { By, until, getBrowser } = require('../lib/webdriver-util');
const { TARGET_HOST, BROWSER, JEST_TIMEOUT } = process.env;
const WAIT_TIME = 3000;

describe("Landing page", () =>{
  jest.setTimeout(JEST_TIMEOUT);
  let browser;
  let landingPage;

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

  it(`displays 'Todos' heading text`, async() => {
    try{
      const expectedTodosText = "Todos";

      // Wait till the landing page is loaded & ready
      await browser.sleep(WAIT_TIME);

      const todosElement = await landingPage.getTodosHeadingElement();
      assert.notEqual(todosElement, null);
      const todosText = await todosElement.getText();
      assert.strictEqual(todosText, expectedTodosText);
    } catch(err) {
      assert.fail(err);
    }
  });

  it(`displays an Input text for entering a Todo item`, async() => {
    try{
      // Wait till the landing page is loaded & ready
      await browser.sleep(WAIT_TIME);

      const inputTodoElement = await landingPage.getTodoInputElement();
      assert.notEqual(inputTodoElement, null);

      const todosText = await inputTodoElement.getText();
      assert.strictEqual(todosText, "");
    } catch(err) {
      assert.fail(err);
    }
  });

  it(`displays instructions label below the Todo Input text`, async() => {
    try {
      const expectedInstructionText = "Click to edit a todo.";
      // Wait till the landing page is loaded & ready
      await browser.sleep(WAIT_TIME);

      const instructionLabelElement = await landingPage.getInstructionLabelElement();
      assert.notEqual(instructionLabelElement, null);
      
      const instructionText = await instructionLabelElement.getText();
      assert.strictEqual(instructionText, expectedInstructionText);
    } catch(err) {
      assert.fail(err);
    }
  });
});


