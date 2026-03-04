import { Page } from '@playwright/test';
import { CartPageLocators } from './cart-page-locators';

export class CartPage {
  private readonly locators: CartPageLocators;

  constructor(private readonly page: Page) {
    this.locators = new CartPageLocators(page);
  }

  async proceedToCheckout() {
    await this.locators.checkoutButton.click();
  }
}