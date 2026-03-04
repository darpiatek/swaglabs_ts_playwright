import { Page, expect } from '@playwright/test';
import { CheckoutCompletePageLocators } from './checkout-complete-page-locators';

export class CheckoutCompletePage {
  private readonly locators: CheckoutCompletePageLocators;

  constructor(private readonly page: Page) {
    this.locators = new CheckoutCompletePageLocators(page);
  }

  async expectConfirmationMessage() {
    await expect(this.locators.confirmationMessage).toHaveText('Thank you for your order!');
  }
}