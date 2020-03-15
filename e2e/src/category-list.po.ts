import { browser, by, element } from 'protractor';

export class CategoryListPage {
  componentName = 'app-category-list';
  container = '.container';
  categoryListHeader = '.category-list-header';
  verticalCategories = '.vertical-categories';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getContainerChildren() {
    return element
      .all(by.css(`${this.componentName} ${this.container}`))
      .all(by.tagName('div'))
      .count();
  }

  getHeaderText() {
    return element(
      by.css(`${this.componentName} ${this.categoryListHeader}`)
    ).getText();
  }

  getCategoryList() {
    return element
      .all(by.css(`${this.componentName} ${this.verticalCategories}`))
      .all(by.tagName('button'))
      .getText();
  }

  getButton(category: string) {
    return element(by.buttonText(category));
  }
}
