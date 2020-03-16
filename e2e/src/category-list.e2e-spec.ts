import { CategoryListPage } from './category-list.po';
import { browser, logging } from 'protractor';

describe('CategoryListComponent', () => {
  let page: CategoryListPage;
  const localhost = 'http://localhost:4200';
  const dev = 'dev';
  const childrenNumber = 2;

  beforeEach(() => {
    page = new CategoryListPage();
    page.navigateTo();
  });

  it('should contains header and category list', () => {
    expect(page.getContainerChildren()).toBe(childrenNumber);
  });

  it('should display header Chuck Norris Jokes Generator', () => {
    expect(page.getHeaderText()).toEqual('Chuck Norris Jokes Generator');
  });

  it('should contains number of categories [capitalized]', () => {
    const categories = [
      'animal',
      'career',
      'celebrity',
      'dev',
      'explicit',
      'fashion',
      'food',
      'history',
      'money',
      'movie',
      'music',
      'political',
      'religion',
      'science',
      'sport',
      'travel',
    ].map(name => name.charAt(0).toUpperCase() + name.slice(1));

    expect(page.getCategoryList()).toEqual(categories);
  });

  it('should redirect to different jokes/category location after clicked the button', () => {
    const category = 'dev';

    expect(
      page
        .getButton(category.charAt(0).toUpperCase() + category.slice(1))
        .click()
        .then(() => {
          return browser.getCurrentUrl().then(url => url);
        })
    ).toEqual(`${localhost}/jokes/${category}`);
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
