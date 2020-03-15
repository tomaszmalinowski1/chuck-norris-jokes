import { RandomJokePage } from './random-joke.po';
import { browser, logging } from 'protractor';

describe('RandomJokeComponent', () => {
  let page: RandomJokePage;
  const localhost = 'http://localhost:4200';
  const dev = 'dev';
  const divElNumber = 3;
  const buttonElNumber = 1;
  const waiting = 2000;

  beforeEach(() => {
    page = new RandomJokePage();
    browser.get('/jokes/dev');
  });

  it('should contains backbutton, chuck logo, joke', () => {
    expect(page.getContainerDivChildren()).toBe(divElNumber);
  });

  it('should contains nextJokeButton', () => {
    expect(page.getContainerButtonChild()).toBe(buttonElNumber);
  });

  it('should get a new joke after clicking on "Another One" button', () => {
    browser.sleep(waiting);
    const currentJoke = page.getJokeText().getText();
    page.getAnotherOneButton().click();
    browser.sleep(waiting);
    expect(currentJoke).not.toBe(page.getJokeText().getText());
  });

  it('should go back to category list', () => {
    browser.sleep(waiting);
    page.getBackButton().click();
    browser.sleep(waiting);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
