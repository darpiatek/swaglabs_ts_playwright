import { Page, Locator } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object locators for the Inventory Item (product details) page.
 *
 * This class centralizes all Playwright locators used on the product
 * details page. It follows the Page Object Model (POM) pattern to keep
 * selectors maintainable and reusable across tests.
 */
export class InventoryItemPageLocators {

  /**
   * Creates a new instance of InventoryItemPageLocators.
   *
   * @param page - Playwright Page instance used to resolve locators
   */
  constructor(private readonly page: Page) {
  }

  /**
   * Returns the locator for the "Back to products" button.
   *
   * This button navigates the user from the product details page
   * back to the inventory (products listing) page.
   *
   * @returns Playwright Locator targeting the back navigation button
   */
  get backToProducts(): Locator {
    logger.debug('Returning locator: backToProducts');
    return this.page.locator('[data-test="back-to-products"]');
  }

  /**
   * Returns the locator for the product name displayed
   * on the product details page.
   *
   * @returns Playwright Locator targeting the product name element
   */
  get productName(): Locator {
    logger.debug('Returning locator: productName');
    return this.page.locator('[data-test="inventory-item-name"]');
  }

  /**
   * Returns the locator for the product description displayed
   * on the product details page.
   *
   * @returns Playwright Locator targeting the product description element
   */
  get productDescription(): Locator {
    logger.debug('Returning locator: productDescription');
    return this.page.locator('[data-test="inventory-item-desc"]');
  }

  /**
   * Returns the locator for the product price displayed
   * on the product details page.
   *
   * @returns Playwright Locator targeting the product price element
   */
  get productPrice(): Locator {
    logger.debug('Returning locator: productPrice');
    return this.page.locator('[data-test="inventory-item-price"]');
  }
}