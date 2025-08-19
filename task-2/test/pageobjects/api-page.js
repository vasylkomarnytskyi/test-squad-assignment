import Page from '../pageobjects/page.js';

class ApiPage extends Page {
  get title() {
    return $('h1');
  }
  get footer() {
    return $('footer');
  }
  get blogButtonInFooter() {
    return $('footer a[href="/blog"]');
  }
  get nextButton() {
    return $('.pagination-nav__link--next');
  }
  get webDriverProtocolHeader() {
    return $('#webdriver-protocol');
  }

  async checkTitle(expectedTitle) {
    await expect(this.title).toHaveText(expectedTitle);
  }

  async scrollToFooter() {
    await this.footer.scrollIntoView();
  }

  async checkIsFooterVisible() {
    await expect(this.footer).toBeDisplayedInViewport();
  }

  async checkBlogButtonIsDisplayed() {
    await expect(this.blogButtonInFooter).toBeDisplayed();
    await expect(this.blogButtonInFooter).toBeClickable();
  }

  async checkNextButton() {
    await this.nextButton.waitForDisplayed({ timeout: 5000 });
    await expect(this.nextButton).toBeDisplayed();

    await this.nextButton.waitForClickable({ timeout: 5000 });
    await expect(this.nextButton).toBeClickable();

    const innerHtml = await this.nextButton.getHTML(false);
    console.log('Inner HTML:', innerHtml);

    const outerHtml = await this.nextButton.getHTML(true);
    console.log('Outer HTML:', outerHtml);
  }

  async clickNextButton() {
    await this.nextButton.click();
  }

  async waitForWebDriverProtocolHeader(expectedTitle) {
    await this.webDriverProtocolHeader.scrollIntoView();
    await this.webDriverProtocolHeader.waitForDisplayed({ timeout: 5000 });
    await expect(this.webDriverProtocolHeader).toHaveText(expectedTitle);
  }

  open() {
    return super.open();
  }
}

export default new ApiPage();
