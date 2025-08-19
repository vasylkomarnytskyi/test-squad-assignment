import homePage from '../pageobjects/home-page.js';
import apiPage from '../pageobjects/api-page.js';

describe('API Page', () => {
  it('should open the API page', async () => {
    await homePage.open();
    await homePage.clickApiNavbarLink();
    await apiPage.expectUrl('/docs/api');
    await apiPage.checkTitle('Introduction');
    await apiPage.scrollToFooter();
    await apiPage.checkIsFooterVisible();
    await apiPage.checkBlogButtonIsDisplayed();
    await apiPage.checkNextButton();
    await apiPage.clickNextButton();
    await apiPage.waitForWebDriverProtocolHeader('WebDriver Protocol');
  });
});
