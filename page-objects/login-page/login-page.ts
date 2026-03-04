import { BasePage } from '../base-page';
import { LoginPageLocators } from './login-page-locators';
import { Page } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object representing the Login page.
 *
 * This class contains actions related to the authentication process,
 * such as filling credentials and submitting the login form.
 * It extends BasePage to reuse shared page functionality.
 */
export class LoginPage extends BasePage {
  private readonly locators: LoginPageLocators;

  /**
   * Creates a new LoginPage instance.
   *
   * @param page - Playwright Page instance used for browser interaction
   */
  constructor(page: Page) {
    super(page);
    this.locators = new LoginPageLocators(page);
  }

  /**
   * Fills the username field in the login form.
   *
   * @param username - Username used for authentication
   */
  async fillUsername(username: string) {
    logger.info(`Filling username: ${username}`);
    await this.locators.usernameField.fill(username);
  }

  /**
   * Fills the password field in the login form.
   *
   * @param password - Password used for authentication
   */
  async fillPassword(password: string) {
    logger.info('Filling password field');
    await this.locators.passwordField.fill(password);
  }

  /**
   * Clicks the login button to submit the login form.
   */
  async clickLogin() {
    logger.info('Clicking login button');
    await this.locators.loginButton.click();
  }

  /**
   * Performs the full login flow.
   *
   * This method fills the username and password fields
   * and submits the login form.
   *
   * @param username - Username used for authentication
   * @param password - Password used for authentication
   */
  async login(username: string, password: string) {
    logger.info('Performing login action');

    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}