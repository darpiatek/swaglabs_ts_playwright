import { Page, Locator } from '@playwright/test';
import { logger } from '../../../config/logger';

/**
 * Locators for the Header component.
 *
 * This class contains Playwright locators related to the application
 * header/navigation area. It follows the Page Object Model (POM)
 * approach to keep selectors centralized and maintainable.
 */
export class HeaderComponentLocators {
  /**
   * Creates a new instance of HeaderComponentLocators.
   *
   * @param page - Playwright Page instance used to resolve locators
   */
  constructor(private readonly page: Page) {
  }

  /**
   * Returns the locator for the menu button in the header.
   *
   * This button usually opens the side navigation menu.
   *
   * @returns Playwright Locator targeting the menu button
   */
  get menuButton(): Locator {
    logger.debug('Returning locator: menuButton');
    return this.page.locator('//button[@id="react-burger-menu-btn"]');
  }

  /**
   * Returns the locator for the logout button inside the menu.
   *
   * @returns Playwright Locator targeting the logout button
   */
  get logoutButton(): Locator {
    logger.debug('Returning locator: logoutButton');
    return this.page.locator('[data-test="complete-header"]');
  }
}