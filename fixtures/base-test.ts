import { test as base, expect } from '@playwright/test';
import { InventoryPage } from '../page-objects/inventory-page/inventory-page';
import { InventoryItemPage } from '../page-objects/inventory-page/inventory-item-page';
import { CartPage } from '../page-objects/cart-page/cart-page';
import { CheckoutInformationPage } from '../page-objects/checkout-page/checkout-information-page';
import { CheckoutOverviewPage } from '../page-objects/checkout-page/checkout-overview-page';
import { CheckoutCompletePage } from '../page-objects/checkout-page/checkout-complete-page';
import { HeaderComponent } from '../page-objects/components/header/header';

type Pages = {
  inventory: InventoryPage;
  inventoryItem: InventoryItemPage;
  cart: CartPage;
  checkoutInformation: CheckoutInformationPage;
  checkoutOverview: CheckoutOverviewPage;
  checkoutComplete: CheckoutCompletePage;
  header: HeaderComponent;
};

export const test = base.extend<Pages>({
  inventory: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  inventoryItem: async ({ page }, use) => {
    await use(new InventoryItemPage(page));
  },

  cart: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutInformation: async ({ page }, use) => {
    await use(new CheckoutInformationPage(page));
  },

  checkoutOverview: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },

  checkoutComplete: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },

  header: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
});


test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await page.screenshot();

    await testInfo.attach('screenshot-on-failure', {
      body: screenshot,
      contentType: 'image/png',
    });
  }
});

export { expect };