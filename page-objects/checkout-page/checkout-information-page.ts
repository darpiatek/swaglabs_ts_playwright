import { Page } from '@playwright/test';
import { CheckoutInformationPageLocators } from './checkout-information-page-locators';
import { logger } from '../../config/logger';

/**
 * Page Object representing the Checkout Information page.
 *
 * This class contains actions related to the checkout step where
 * the user provides personal and shipping information before
 * proceeding to the order overview.
 */
export class CheckoutInformationPage {
  private readonly locators: CheckoutInformationPageLocators;

  /**
   * Creates a new CheckoutInformationPage instance.
   *
   * @param page - Playwright Page instance used for browser interaction
   */
  constructor(private readonly page: Page) {
    this.locators = new CheckoutInformationPageLocators(page);
  }

  /**
   * Fills the checkout information form with user data.
   *
   * @param data - Object containing user checkout information
   * @param data.firstName - Customer first name
   * @param data.lastName - Customer last name
   * @param data.postalCode - Customer postal/ZIP code
   */
  async fillCheckoutInformation(data: {
    firstName: string;
    lastName: string;
    postalCode: string;
  }) {
    logger.info('Filling checkout information form');

    await this.locators.firstNameInput.fill(data.firstName);
    await this.locators.lastNameInput.fill(data.lastName);
    await this.locators.postalCodeInput.fill(data.postalCode);
  }

  /**
   * Clicks the continue button to proceed to the next step
   * of the checkout process.
   */
  async continue() {
    logger.info('Continuing to the next checkout step');
    await this.locators.continueButton.click();
  }
}