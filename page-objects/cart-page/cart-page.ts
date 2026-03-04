import { Page } from '@playwright/test';
import { CartPageLocators } from './cart-page-locators';
import { expect } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object representing the Cart page.
 *
 * This class contains actions and assertions related to the cart page.
 * It uses the CartPageLocators class to access page elements and
 * provides higher-level operations used in tests.
 */
export class CartPage {
  private readonly locators: CartPageLocators;

  /**
   * Creates a new CartPage instance.
   *
   * @param page - Playwright Page instance used to interact with the browser
   */
  constructor(private readonly page: Page) {
    this.locators = new CartPageLocators(page);
  }

  /**
   * Calculates the total price of all products currently displayed in the cart.
   *
   * The method retrieves all price texts, converts them to numbers,
   * and sums them into a single total value.
   *
   * @returns Total price of all products in the cart
   */
  async getProductsTotal(): Promise<number> {
    logger.info('Calculating total price of products in cart');

    const prices = await this.locators
      .productPrices
      .allTextContents();

    return prices
      .map(price => Number(price.replace('$', '').trim()))
      .reduce((acc, value) => acc + value, 0);
  }

  /**
   * Clicks the checkout button to proceed to the checkout process.
   */
  async proceedToCheckout() {
    logger.info('Proceeding to checkout');
    await this.locators.checkoutButton.click();
  }

  /**
   * Retrieves the names of all products currently visible in the cart.
   *
   * @returns Array of product names
   */
  async getProductNames(): Promise<string[]> {
    logger.info('Retrieving product names from cart');

    return this.locators
      .productName
      .allTextContents();
  }

  /**
   * Validates that the product names in the cart match the expected list.
   *
   * @param expected - Expected list of product names
   */
  async validateProductNames(expected: string[]) {
    logger.info('Validating product names in cart');

    const actual = await this.getProductNames();
    expect(actual).toEqual(expected);
  }
}