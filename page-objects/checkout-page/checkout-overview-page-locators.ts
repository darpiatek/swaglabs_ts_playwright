import { Page, Locator } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object locators for the Checkout Overview page.
 *
 * This class contains Playwright locators used on the checkout overview step,
 * where the user can review the order summary before finalizing the purchase.
 * It follows the Page Object Model (POM) pattern to centralize selectors.
 */
export class CheckoutOverviewPageLocators {
  /**
   * Creates a new instance of CheckoutOverviewPageLocators.
   *
   * @param page - Playwright Page instance used to resolve locators
   */
  constructor(private readonly page: Page) {
  }

  /**
   * Returns the locator for the finish button used to complete the checkout.
   *
   * @returns Playwright Locator targeting the finish button
   */
  get finishButton(): Locator {
    logger.debug('Returning locator: finishButton');
    return this.page.locator('[data-test="finish"]');
  }

  /**
   * Returns the locator for the subtotal label displaying the order total.
   *
   * @returns Playwright Locator targeting the subtotal label
   */
  get totalLabel(): Locator {
    logger.debug('Returning locator: totalLabel');
    return this.page.locator('[data-test="subtotal-label"]');
  }

  /**
   * Returns the locator for product name elements listed in the order overview.
   *
   * @returns Playwright Locator targeting product name elements
   */
  get productName(): Locator {
    logger.debug('Returning locator: productName');
    return this.page.locator('[data-test="inventory-item-name"]');
  }
}