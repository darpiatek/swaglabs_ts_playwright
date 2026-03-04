import { Page, Locator } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object locators for the Login page.
 *
 * This class contains Playwright locators used to interact with
 * the login form elements such as username, password fields,
 * and the login button. It follows the Page Object Model (POM)
 * to keep selectors centralized and maintainable.
 */
export class LoginPageLocators {
  /**
   * Creates a new instance of LoginPageLocators.
   *
   * @param page - Playwright Page instance used to resolve locators
   */
  constructor(private readonly page: Page) {
  }

  /**
   * Returns the locator for the username input field.
   *
   * @returns Playwright Locator targeting the username field
   */
  get usernameField(): Locator {
    logger.debug('Returning locator: usernameField');
    return this.page.locator('[data-test="username"]');
  }

  /**
   * Returns the locator for the password input field.
   *
   * @returns Playwright Locator targeting the password field
   */
  get passwordField(): Locator {
    logger.debug('Returning locator: passwordField');
    return this.page.locator('[data-test="password"]');
  }

  /**
   * Returns the locator for the login button.
   *
   * @returns Playwright Locator targeting the login button
   */
  get loginButton(): Locator {
    logger.debug('Returning locator: loginButton');
    return this.page.locator('[data-test="login-button"]');
  }
}