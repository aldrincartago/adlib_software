/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
  async getCheckboxByText(text) {
    return await $('//td[text()="'+text+'"]/ancestor-or-self::tr//child::div[@role="checkbox"]');
  }
}

export default new HomePage();
