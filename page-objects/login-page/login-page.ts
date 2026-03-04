import { BasePage } from '../base-page';
import { LoginPageLocators } from './login-page-locators';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  private readonly locators: LoginPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginPageLocators(page);
  }

  async fillUsername(username: string) {
    await this.locators.usernameField.fill(username);
  }

  async fillPassword(password: string) {
    await this.locators.passwordField.fill(password);
  }

  async clickLogin() {
    await this.locators.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}