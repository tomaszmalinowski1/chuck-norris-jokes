import { browser, by, element } from 'protractor';

export class RandomJokePage {
  componentName = 'app-random-joke';
  jokeContainer = '.joke-container';
  backButton = '.back-button img';
  logo = '.logo';
  jokeText = '.joke-text';
  anotherOneButton = 'button';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getJokeText() {
    return element(by.css(`${this.componentName} ${this.jokeText}`));
  }

  getBackButton() {
    return element(by.css(`${this.componentName} ${this.backButton}`));
  }

  getAnotherOneButton() {
    return element(by.buttonText('Another one'));
  }

  getContainerDivChildren() {
    return element
      .all(by.css(`${this.componentName} ${this.jokeContainer}`))
      .all(by.tagName('div'))
      .count();
  }

  getContainerButtonChild() {
    return element
      .all(by.css(`${this.componentName} ${this.jokeContainer}`))
      .all(by.tagName('button'))
      .count();
  }
}
