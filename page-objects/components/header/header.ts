import { Page } from '@playwright/test';
import { HeaderComponentLocators } from './header-locators';
import { logger } from '../../../config/logger';

/**
 * Component representing the application header.
 *
 * This component encapsulates interactions with the header/navigation
 * area of the application, such as opening the menu and performing logout.
 * It relies on HeaderComponentLocators to access page elements.
 */
export class HeaderComponent {
  private readonly locators: HeaderComponentLocators;

  /**
   * Creates a new HeaderComponent instance.
   *
   * @param page - Playwright Page instance used for browser interaction
   */
  constructor(private readonly page: Page) {
    this.locators = new HeaderComponentLocators(page);
  }

  /**
   * Logs the user out of the application.
   *
   * The method opens the navigation menu and clicks the logout button.
   */
  async logout() {
    logger.info('Performing logout');

    await this.locators.menuButton.click();
    await this.locators.logoutButton.click();
  }
}