import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPageLocators {
  constructor(private readonly page: Page) {}

  get finishButton(): Locator {
    return this.page.locator('[data-test="finish"]');
  }

  get totalLabel(): Locator {
    return this.page.locator('[data-test="total-label"]');
  }
}