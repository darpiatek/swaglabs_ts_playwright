import { Page, Locator } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object locators for the Checkout Complete page.
 *
 * This class contains all Playwright locators used on the
 * checkout completion screen. It follows the Page Object Model (POM)
 * pattern to centralize selectors and improve test maintainability.
 */
export class CheckoutCompletePageLocators {
  /**
   * Creates a new instance of CheckoutCompletePageLocators.
   *
   * @param page - Playwright Page instance used to resolve locators
   */
  constructor(private readonly page: Page) {
  }

  /**
   * Returns the locator for the order confirmation message
   * displayed after a successful checkout.
   *
   * @returns Playwright Locator pointing to the confirmation header element
   */
  get confirmationMessage(): Locator {
    logger.debug('Returning locator: confirmationMessage');
    return this.page.locator('[data-test="complete-header"]');
  }
}