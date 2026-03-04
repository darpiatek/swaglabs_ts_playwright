import { Page, expect } from '@playwright/test';
import { InventoryPageLocators } from './inventory-page-locators';
import { Product } from '../../data/products';
import { logger } from '../../config/logger';

/**
 * Page Object representing the Inventory (products listing) page.
 *
 * This class provides actions and validations related to products displayed
 * on the inventory page such as adding/removing items from the cart,
 * sorting products and retrieving product information.
 */
export class InventoryPage {
  private readonly locators: InventoryPageLocators;
  private readonly url = '/inventory.html';

  /**
   * Creates a new InventoryPage instance.
   *
   * @param page - Playwright Page instance used for browser interaction
   */
  constructor(private readonly page: Page) {
    this.locators = new InventoryPageLocators(page);
  }

  /**
   * Navigates to the inventory page.
   */
  async goto() {
    logger.info('Navigating to inventory page');
    await this.page.goto(this.url);
  }

  /**
   * Adds a specific product to the shopping cart.
   *
   * The method finds the product by name, clicks the corresponding button
   * and verifies that the button text changes to "Remove".
   *
   * @param productName - Name of the product to add to the cart
   */
  async addProductToCart(productName: string) {
    logger.info(`Adding product to cart: ${productName}`);

    const button = this.locators.productButton(
      this.locators.productByName(productName)
    );

    await button.click();
    await expect(button).toHaveText('Remove');
  }

  /**
   * Removes a specific product from the shopping cart.
   *
   * The method finds the product by name, clicks the corresponding button
   * and verifies that the button text changes to "Add to cart".
   *
   * @param productName - Name of the product to remove from the cart
   */
  async removeProductFromCart(productName: string) {
    logger.info(`Removing product from cart: ${productName}`);

    const button = this.locators.productButton(
      this.locators.productByName(productName)
    );

    await button.click();
    await expect(button).toHaveText('Add to cart');
  }

  /**
   * Adds multiple products to the cart.
   *
   * @param products - Array of products to add
   */
  async addProducts(products: Product[]) {
    logger.info('Adding multiple products to cart');

    for (const product of products) {
      await this.addProductToCart(product);
    }
  }

  /**
   * Removes multiple products from the cart.
   *
   * @param products - Array of products to remove
   */
  async removeProducts(products: Product[]) {
    logger.info('Removing multiple products from cart');

    for (const product of products) {
      await this.removeProductFromCart(product);
    }
  }

  /**
   * Navigates to the shopping cart page.
   */
  async goToCart() {
    logger.info('Navigating to cart page');
    await this.locators.cartLink.click();
  }

  /**
   * Sorts products by price from lowest to highest.
   */
  async sortByPriceLowToHigh() {
    logger.info('Sorting products by price: low to high');
    await this.locators.sort.selectOption('lohi');
  }

  /**
   * Retrieves the name of the first product in the list.
   *
   * @returns Name of the first product
   */
  async getFirstProductName(): Promise<string> {
    logger.info('Retrieving first product name');

    return (
      (await this.locators
        .productName
        .first()
        .textContent()) ?? ''
    );
  }

  /**
   * Retrieves the name of the last product in the list.
   *
   * @returns Name of the last product
   */
  async getLastProductName(): Promise<string> {
    logger.info('Retrieving last product name');

    return (
      (await this.locators
        .productName
        .last()
        .textContent()) ?? ''
    );
  }

  /**
   * Validates that products are sorted by price in ascending order.
   *
   * The method extracts all product prices from the page, converts them
   * to numbers and verifies that the order matches the sorted list.
   */
  async validateSortedLowToHigh() {
    logger.info('Validating product sorting by price (low to high)');

    const priceTexts = await this.locators.productPrices.allTextContents();

    const prices = priceTexts.map(price =>
      Number(price.replace('$', '').trim())
    );

    const sorted = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sorted);
  }
}