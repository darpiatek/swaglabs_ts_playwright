import { Page, expect } from '@playwright/test';
import { CheckoutOverviewPageLocators } from './checkout-overview-page-locators';

export class CheckoutOverviewPage {
  private readonly locators: CheckoutOverviewPageLocators;

  constructor(private readonly page: Page) {
    this.locators = new CheckoutOverviewPageLocators(page);
  }
  async finish() {
    await this.locators.finishButton.click();
  }

    async validateTotal() {
    await expect(this.locators.totalLabel).toBeVisible();
  }
}