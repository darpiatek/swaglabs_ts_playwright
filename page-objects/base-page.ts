import { Page } from '@playwright/test';
import { logger } from '../config/logger';

/**
 * Base class for all Page Objects.
 *
 * This abstract class provides shared functionality used across
 * different pages in the application, such as navigation and
 * retrieving page metadata. Other page classes should extend
 * this class to reuse common browser interactions.
 */
export abstract class BasePage {
  protected readonly page: Page;

  /**
   * Creates a new BasePage instance.
   *
   * @param page - Playwright Page instance used for browser interaction
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to a specified URL.
   *
   * @param url - URL or path to navigate to
   */
  async navigate(url: string) {
    logger.info(`Navigating to URL: ${url}`);
    await this.page.goto(url);
  }

  /**
   * Retrieves the current page title.
   *
   * @returns The title of the current page
   */
  async getTitle() {
    logger.info('Retrieving page title');
    return this.page.title();
  }
}