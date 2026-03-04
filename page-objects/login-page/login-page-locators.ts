import { Page } from '@playwright/test';

export class LoginPageLocators {
  constructor(private readonly page: Page) {}

  get usernameField() {
    return this.page.locator('[data-test="username"]');
  }

  get passwordField() {
    return this.page.locator('[data-test="password"]');
  }

  get loginButton() {
    return this.page.locator('[data-test="login-button"]');
  }
}