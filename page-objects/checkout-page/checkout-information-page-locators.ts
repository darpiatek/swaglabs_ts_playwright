import { Page, Locator } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object locators for the Checkout Information page.
 *
 * This class centralizes all Playwright locators used on the checkout
 * information step where the user provides personal and shipping data.
 * It follows the Page Object Model (POM) pattern to keep selectors
 * organized and maintainable.
 */
export class CheckoutInformationPageLocators {
  /**
   * Creates a new instance of CheckoutInformationPageLocators.
   *
   * @param page - Playwright Page instance used to resolve locators
   */
  constructor(private readonly page: Page) {
  }

  /**
   * Returns the locator for the first name input field.
   *
   * @returns Playwright Locator targeting the first name input
   */
  get firstNameInput(): Locator {
    logger.debug('Returning locator: firstNameInput');
    return this.page.locator('[data-test="firstName"]');
  }

  /**
   * Returns the locator for the last name input field.
   *
   * @returns Playwright Locator targeting the last name input
   */
  get lastNameInput(): Locator {
    logger.debug('Returning locator: lastNameInput');
    return this.page.locator('[data-test="lastName"]');
  }

  /**
   * Returns the locator for the postal code input field.
   *
   * @returns Playwright Locator targeting the postal code input
   */
  get postalCodeInput(): Locator {
    logger.debug('Returning locator: postalCodeInput');
    return this.page.locator('[data-test="postalCode"]');
  }

  /**
   * Returns the locator for the continue button used to proceed
   * to the next step of the checkout process.
   *
   * @returns Playwright Locator targeting the continue button
   */
  get continueButton(): Locator {
    logger.debug('Returning locator: continueButton');
    return this.page.locator('[data-test="continue"]');
  }
}