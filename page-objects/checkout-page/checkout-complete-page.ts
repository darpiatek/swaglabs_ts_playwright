import { Page, expect } from '@playwright/test';
import { CheckoutCompletePageLocators } from './checkout-complete-page-locators';
import { logger } from '../../config/logger';

/**
 * Page Object representing the Checkout Complete page.
 *
 * This class contains assertions and interactions related to the
 * final checkout confirmation screen displayed after a successful order.
 */
export class CheckoutCompletePage {
  private readonly locators: CheckoutCompletePageLocators;

  /**
   * Creates a new CheckoutCompletePage instance.
   *
   * @param page - Playwright Page instance used for browser interaction
   */
  constructor(private readonly page: Page) {
    this.locators = new CheckoutCompletePageLocators(page);
  }

  /**
   * Verifies that the confirmation message is visible and matches
   * the expected success message after completing checkout.
   */
  async expectConfirmationMessage() {
    logger.info('Validating checkout confirmation message');
    await expect(this.locators.confirmationMessage).toHaveText('Thank you for your order!');
  }
}