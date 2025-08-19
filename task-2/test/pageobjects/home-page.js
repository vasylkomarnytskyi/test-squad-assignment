import Page from '../pageobjects/page.js';

class HomePage extends Page {
  get apiNavbarLink() {
    return $('nav a[href="/docs/api"]');
  }

  async clickApiNavbarLink() {
    await this.apiNavbarLink.click();
  }

  open() {
    return super.open();
  }
}

export default new HomePage();
