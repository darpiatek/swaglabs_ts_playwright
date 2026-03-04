import { Page, Locator } from '@playwright/test';

export class CheckoutInformationPageLocators {
  constructor(private readonly page: Page) {}

  get firstNameInput(): Locator {
    return this.page.locator('[data-test="firstName"]');
  }

  get lastNameInput(): Locator {
    return this.page.locator('[data-test="lastName"]');
  }

  get postalCodeInput(): Locator {
    return this.page.locator('[data-test="postalCode"]');
  }

  get continueButton(): Locator {
    return this.page.locator('[data-test="continue"]');
  }

}