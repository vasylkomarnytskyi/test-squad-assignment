import Page from '../pageobjects/page.js';

class HomePage extends Page {
  get apiNavbarItem() {
    return $('a=API');
  }

  async clickApiNavbarItem() {
    await this.apiNavbarItem.click();
  }

  open() {
    return super.open();
  }
}

export default new HomePage();
