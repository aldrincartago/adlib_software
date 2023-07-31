/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(path);
  }

  async clickElement(element) {
    await element.waitForClickable();
    await element.click();
    await browser.pause(1500);
  }

  async setText(element, text) {
    await element.waitForEnabled();
    await element.setValue(text);
  }
}
