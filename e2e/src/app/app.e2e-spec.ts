import { WebElement, Builder, Browser, WebDriver, By, until, logging } from 'selenium-webdriver';

describe('app', async () => {
  let driver: WebDriver;
  let broncoTopNavbar: WebElement;
  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:8080');
    broncoTopNavbar = await driver.findElement(By.tagName('bronco-button'));
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should find title element', async () => {
    expect(broncoTopNavbar).toBeTruthy();
  }, 3000);
});
