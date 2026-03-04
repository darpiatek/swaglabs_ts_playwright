import { Page, Locator } from '@playwright/test';

export class CartPageLocators {
  constructor(private readonly page: Page) {}

  get checkoutButton(): Locator {
    return this.page.locator('[data-test="checkout"]');
  }
}