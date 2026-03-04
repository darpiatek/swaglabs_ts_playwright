import { Page, Locator } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object locators for the Cart page.
 *
 * This class groups all Playwright locators used on the cart page.
 * Keeping selectors in one place improves maintainability and follows
 * the Page Object Model (POM) pattern commonly used in test automation.
 */
export class CartPageLocators {
  /**
   * Creates a new CartPageLocators instance.
   *
   * @param page - Playwright Page instance used to resolve locators
   */
  constructor(private readonly page: Page) {
  }

  /**
   * Returns the locator for the checkout button on the cart page.
   *
   * @returns Playwright Locator pointing to the checkout button
   */
  get checkoutButton(): Locator {
    logger.debug('Returning locator: checkoutButton');
    return this.page.locator('[data-test="checkout"]');
  }

  /**
   * Returns locators for all product prices displayed in the cart.
   *
   * @returns Playwright Locator targeting product price elements
   */
  get productPrices(): Locator {
    logger.debug('Returning locator: productPrices');
    return this.page.locator('[data-test="inventory-item-price"]');
  }

  /**
   * Returns the locator for the product name element.
   *
   * @returns Playwright Locator targeting product name elements
   */
  get productName(): Locator {
    logger.debug('Returning locator: productName');
    return this.page.locator('[data-test="inventory-item-name"]');
  }
}