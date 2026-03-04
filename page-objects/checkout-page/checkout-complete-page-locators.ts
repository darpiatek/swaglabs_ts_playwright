import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePageLocators {
  constructor(private readonly page: Page) {}

  get confirmationMessage(): Locator {
    return this.page.locator('[data-test="complete-header"]');
  }
}