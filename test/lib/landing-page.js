'use strict';

const { By, Key } = require('./webdriver-util');
const WAIT_TIME = 3000;

module.exports = class LandingPage {
  constructor(browser) {
    this.browser = browser;
  }

  getTodosHeadingElement() {
    return this.browser.findElement(By.xpath(`//div[@id='todoapp']/div/h1`));
  }

  getTodoInputElement() {
    return this.browser.findElement(By.css(`#new-todo`));
  }

  getInstructionLabelElement() {
    return this.browser.findElement(By.xpath(`//ul[@id='instructions']/li`))
  }

  getTodoItemElement(index) {
    return this.browser.findElement(By.xpath(`//ul[@id='todo-list']/li[${index}]`));
    // return this.browser.findElement(By.css(`ul#todo-list > li:nth-of-type(${index})`));
  }

  getTodoItemElements() {
    return this.browser.findElements(By.xpath(`//ul[@id='todo-list']/li`));
  }

  getTodoItemTextElement(todoItemElement) {
    return todoItemElement.findElement(By.xpath(`//div/div/span`));
  }

  getTodoItemTickboxElement(todoItemElement) {
    return todoItemElement.findElement(By.xpath(`//div/input[@class='check']`));
  }

  getTodoStatsElement() {
    return this.browser.findElement(By.xpath(`//div[@id='todo-stats']`));
  }

  getTodoNumberStatElement(todoStatsElement) {
    return todoStatsElement.findElement(By.xpath(`//span/span[@class='number']/span`));
  }

  getTodoWordsStatElement(todoStatsElement) {
    return todoStatsElement.findElement(By.xpath(`//span/span[@class='word']`));
  }

  getClearSelectedItemsLink() {               
    return this.browser.findElement(By.xpath(`//div[@id='todo-stats']/span[2]/a`));
  }

  getDeleteButtonElement(todoItemElement) {
    return todoItemElement.findElement(By.xpath(`//div[@class='display']/span`));
  }

  async doCreateTodo(todo, waitTime=WAIT_TIME) {
    const browser = this.browser;

    await browser.sleep(waitTime);

    // The user click the input text
    const inputTodoElement = await this.getTodoInputElement();
    await inputTodoElement.click();

    // The user enters the Todo Input
    await inputTodoElement.sendKeys(todo, Key.ENTER);
    await browser.sleep(waitTime);
  }

  async selectTodoItem(index, waitTime=WAIT_TIME) {
    const browser = this.browser;

    await browser.sleep(waitTime);
    
    const todoItemElement = await this.getTodoItemElement(1);
    const todoItemTickboxElement = await this.getTodoItemTickboxElement(todoItemElement);
    
    await todoItemTickboxElement.click();
    await browser.sleep(waitTime);
  }
};