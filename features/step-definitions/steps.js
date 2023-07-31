import { Given, When, Then } from "@wdio/cucumber-framework";
import HomePage from "../pageobjects/home.page.js";
import Page from "../pageobjects/page.js";
const page = new Page();

Given(/^I am on the "(.*)" page$/, async (url) => {
  await page.open(url);
});

When(/^I select the checkbox for "(.*)"$/, async (text) => {
  await page.clickElement(await HomePage.getCheckboxByText(text));
});

Then(/^the "(.*)" checkbox should be in selected state$/, async (text) => {
  await expect(await HomePage.getCheckboxByText(text)).toHaveAttribute('aria-checked', 'true')
});
