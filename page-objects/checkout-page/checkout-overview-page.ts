import { Page, expect } from '@playwright/test';
import { CheckoutOverviewPageLocators } from './checkout-overview-page-locators';
import { logger } from '../../config/logger';

/**
 * Page Object representing the Checkout Overview page.
 *
 * This class contains actions and validations related to the
 * checkout overview step where the user reviews the order
 * before completing the purchase.
 */
export class CheckoutOverviewPage {
  private readonly locators: CheckoutOverviewPageLocators;

  /**
   * Creates a new CheckoutOverviewPage instance.
   *
   * @param page - Playwright Page instance used for browser interaction
   */
  constructor(private readonly page: Page) {
    this.locators = new CheckoutOverviewPageLocators(page);
  }

  /**
   * Clicks the finish button to complete the checkout process.
   */
  async finish() {
    logger.info('Finishing checkout process');
    await this.locators.finishButton.click();
  }

  /**
   * Validates that the displayed total price matches the expected total.
   *
   * The method extracts the numeric value from the subtotal label
   * and compares it with the expected products total.
   *
   * @param expectedProductsTotal - Expected total price of products
   */
  async validateTotal(expectedProductsTotal: number) {
    logger.info('Validating order total');

    const totalText = await this.locators
      .totalLabel
      .textContent();

    const actualTotal = parseFloat(
      totalText?.replace(/[^\d.]/g, '') ?? '0'
    );

    expect(actualTotal).toBeCloseTo(expectedProductsTotal, 2);
  }

  /**
   * Retrieves the names of all products listed in the checkout overview.
   *
   * @returns Array containing product names
   */
  async getProductNames(): Promise<string[]> {
    logger.info('Retrieving product names from checkout overview');

    return this.locators
      .productName
      .allTextContents();
  }

  /**
   * Validates that the product names displayed in the overview
   * match the expected list of product names.
   *
   * @param expected - Expected list of product names
   */
  async validateProductNames(expected: string[]) {
    logger.info('Validating product names in checkout overview');

    const actual = await this.getProductNames();
    expect(actual).toEqual(expected);
  }
}