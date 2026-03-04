import { Page, expect } from '@playwright/test';
import { InventoryPageLocators } from './inventory-page-locators';
import { Product } from '../../data/products';

export class InventoryPage {
  private readonly locators: InventoryPageLocators;
  private readonly url = '/inventory.html';

  constructor(private readonly page: Page) {
    this.locators = new InventoryPageLocators(page);
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async addProductToCart(product: Product) {
    const button = this.locators.productButton(
      this.locators.productByName(product)
    );

    await button.click();
    await expect(button).toHaveText('Remove');
  }

  async removeProductFromCart(product: Product) {
    const button = this.locators.productButton(
      this.locators.productByName(product)
    );

    await button.click();
    await expect(button).toHaveText('Add to cart');
  }

  async addProducts(products: Product[]) {
    for (const product of products) {
      await this.addProductToCart(product);
    }
  }

  async removeProducts(products: Product[]) {
    for (const product of products) {
      await this.removeProductFromCart(product);
    }
  }

  async goToCart() {
    await this.locators.cartLink.click();
  }
}