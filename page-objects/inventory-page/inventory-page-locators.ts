import { Page, Locator } from '@playwright/test';

export class InventoryPageLocators {
  constructor(private readonly page: Page) {}

  get productItems(): Locator {
    return this.page.locator('[data-test="inventory-item"]');
  }

  productButton(item: Locator): Locator {
    return item.locator('button');
  }

  get cartLink(): Locator {
    return this.page.locator('.shopping_cart_link');
  }

  productByName(name: string): Locator {
  return this.productItems
    .filter({ hasText: name })
    .first();
  }
}