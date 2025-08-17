import Page from '../pageobjects/page.js';

class ApiPage extends Page {
  get breadcrumbsLink() {
    return $('span.breadcrumbs__link');
  }
  get apiPageTitle() {
    return $('h1');
  }
  get webDriverPageLink() {
    return $('a=Webdriver').getAttribute('href');
  }
  get searchButton() {
    return $('.DocSearch-Button');
  }
  get searchInput() {
    return $('.DocSearch-Input');
  }
  get resetButton() {
    return $('.DocSearch-Reset');
  }

  async expectBreadcrumbText(expectedText) {
    await expect(this.breadcrumbsLink).toBeDisplayed();
    await expect(this.breadcrumbsLink).toHaveText(expectedText);
  }

  async expectApiPageTitle(expectedText) {
    await expect(this.apiPageTitle).toBeDisplayed();
    await expect(this.apiPageTitle).toHaveText(expectedText);
  }

  async expectUrlOfWebDriverPage() {
    await expect(this.webDriverPageLink).toHaveText('docs/api/webdriver');
  }

  async clickSearchButtonAndExpect() {
    await this.searchButton.click();
    await expect(this.searchInput).toBeDisplayed();
  }

  async setSearchInputTextAndExpect(text) {
    await this.searchInput.setValue(text);
    await expect(this.searchInput).toHaveValue(text);
  }

  async clickResetButtonAndExpect() {
    await this.resetButton.click();
    await expect(this.searchInput).toHaveValue('');
  }
}

export default new ApiPage();
