import { Page, expect } from '@playwright/test';
import { CheckoutInformationPageLocators } from './checkout-information-page-locators';

export class CheckoutInformationPage {
  private readonly locators: CheckoutInformationPageLocators;

  constructor(private readonly page: Page) {
    this.locators = new CheckoutInformationPageLocators(page);
  }

  async fillCheckoutInformation(data: {
    firstName: string;
    lastName: string;
    postalCode: string;
  }) {
    await this.locators.firstNameInput.fill(data.firstName);
    await this.locators.lastNameInput.fill(data.lastName);
    await this.locators.postalCodeInput.fill(data.postalCode);
  }

  async continue() {
    await this.locators.continueButton.click();
  }

}