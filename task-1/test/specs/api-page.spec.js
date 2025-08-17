import homePage from '../pageobjects/home-page';
import apiPage from '../pageobjects/api-page';

describe('API Page', () => {
  it('should load the API page', async () => {
    await homePage.open();
    await homePage.clickApiNavbarItem();
    await apiPage.expectUrl('docs/api');
    await apiPage.expectApiPageTitle('Introduction');
    await apiPage.expectBreadcrumbText('Introduction');
    await apiPage.clickSearchButtonAndExpect();
    await apiPage.setSearchInputTextAndExpect('all is done');
    await apiPage.clickResetButtonAndExpect();
  });
});
