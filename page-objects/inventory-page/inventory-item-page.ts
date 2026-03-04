import { Page, expect } from '@playwright/test';
import { InventoryItemPageLocators } from './inventory-item-page-locators';
import { logger } from '../../config/logger';

/**
 * Page Object representing the Inventory Item (product details) page.
 *
 * This class encapsulates interactions and validations related to
 * a single product displayed on the product details page.
 *
 * It allows tests to verify product information such as:
 * - product name
 * - product description
 * - product price
 *
 * It also provides navigation functionality to return to the
 * inventory (products listing) page.
 *
 * The class follows the Page Object Model (POM) pattern to keep
 * UI interactions separated from test logic, improving readability
 * and maintainability of the test suite.
 */
export class InventoryItemPage {
  private readonly locators: InventoryItemPageLocators;

  /**
   * Creates a new InventoryItemPage instance.
   *
   * @param page - Playwright Page instance used for browser interaction
   */
  constructor(private readonly page: Page) {
    this.locators = new InventoryItemPageLocators(page);
  }

  /**
   * Verifies that the product name on the product details page
   * matches the expected value.
   *
   * @param name - Expected product name
   */
  async expectProductName(name: string) {
    logger.info(`Validating product name: ${name}`);
    await expect(this.locators.productName).toHaveText(name);
  }

  /**
   * Verifies that the product description on the product details page
   * matches the expected value.
   *
   * @param description - Expected product description
   */
  async expectProductDescription(description: string) {
    logger.info(`Validating product description`);
    await expect(this.locators.productDescription).toHaveText(description);
  }

  /**
   * Verifies that the product price on the product details page
   * matches the expected value.
   *
   * @param price - Expected product price
   */
  async expectProductPrice(price: number) {
    logger.info(`Validating product price: ${price}`);
    await expect(this.locators.productPrice).toHaveText(`$${price}`);
  }

  /**
   * Navigates back to the inventory page using the
   * "Back to products" button.
   */
  async goBackToProducts() {
    logger.info('Navigating back to inventory page');
    await this.locators.backToProducts.click();
  }
}