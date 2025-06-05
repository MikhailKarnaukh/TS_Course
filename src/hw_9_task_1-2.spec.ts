import { test } from '@playwright/test';
import { LoginPage, CheckboxPage } from './hw_9_HelpMethods.js';


test('Task 1', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login('invalidUser', 'invalidPass');
  await loginPage.assertFlashContains('Your username is invalid!');

  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await loginPage.assertFlashContains('You logged into a secure area!');

  await loginPage.logout();
  await loginPage.assertFlashContains('You logged out of the secure area!');
});

test('Task 2', async ({ page }) => {
  const checkboxPage = new CheckboxPage(page);

  await checkboxPage.navigate();

  await checkboxPage.checkAll();
  await checkboxPage.assertAllChecked();

  await checkboxPage.uncheckAll();
  await checkboxPage.assertAllUnchecked();
});