import { expect, Page } from '@playwright/test';

const loginUrl = 'https://the-internet.herokuapp.com/login';

export class LoginPage {
  constructor(private page: Page) {}

  usernameInput = this.page.locator('#username');
  passwordInput = this.page.locator('#password');
  loginButton = this.page.locator('button[type="submit"]');
  flashMessage = this.page.locator('#flash');
  logoutLink = this.page.locator('a[href="/logout"]');

  async navigate() {
    await this.page.goto(loginUrl);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertFlashContains(text: string) {
    await expect(this.flashMessage).toContainText(text);
  }

  async logout() {
    await this.logoutLink.click();
  }
}

const checkboxUrl = 'https://demo.guru99.com/test/radio.html';

export class CheckboxPage {
  constructor(private page: Page) {}

  checkboxes = [
    this.page.locator('#vfb-6-0'),
    this.page.locator('#vfb-6-1'),
    this.page.locator('#vfb-6-2'),
  ];

  async navigate() {
    await this.page.goto(checkboxUrl);
  }

  async checkAll() {
    for (const checkbox of this.checkboxes) {
      if (!(await checkbox.isChecked())) {
        await checkbox.check();
      }
    }
  }

  async uncheckAll() {
    for (const checkbox of this.checkboxes) {
      if (await checkbox.isChecked()) {
        await checkbox.uncheck();
      }
    }
  }

  async assertAllChecked() {
    for (const checkbox of this.checkboxes) {
      await expect(checkbox).toBeChecked();
    }
  }

  async assertAllUnchecked() {
    for (const checkbox of this.checkboxes) {
      await expect(checkbox).not.toBeChecked();
    }
  }
}