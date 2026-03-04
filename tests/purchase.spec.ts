import { test } from '@playwright/test';
import { InventoryPage } from '../page-objects/inventory-page/inventory-page';
import { CartPage } from '../page-objects/cart-page/cart-page';
import { CheckoutInformationPage } from '../page-objects/checkout-page/checkout-information-page';
import { CheckoutOverviewPage } from '../page-objects/checkout-page/checkout-overview-page';
import { CheckoutCompletePage } from '../page-objects/checkout-page/checkout-complete-page';
import { HeaderComponent } from '../page-objects/components/header/header';
import { PRODUCTS } from '../data/products';

test('Standard user completes a purchase successfully', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkoutInformation = new CheckoutInformationPage(page);
  const checkoutOverview = new CheckoutOverviewPage(page);
  const checkoutComplete = new CheckoutCompletePage(page);
  const header = new HeaderComponent(page);

  await test.step('Open inventory page', async () => {
    await inventory.goto();
  });

  await test.step('Add selected products to cart', async () => {
    await inventory.addProductToCart(PRODUCTS.backpack);
    await inventory.addProductToCart(PRODUCTS.boltShirt);
    await inventory.addProductToCart(PRODUCTS.onesie);
    await inventory.addProductToCart(PRODUCTS.fleeceJacket);
  });

  await test.step('Remove unwanted products from cart', async () => {
    await inventory.removeProductFromCart(PRODUCTS.backpack);
    await inventory.removeProductFromCart(PRODUCTS.boltShirt);
  });

  await test.step('Navigate to shopping cart', async () => {
    await inventory.goToCart();
  });

  await test.step('Proceed to checkout', async () => {
    await cart.proceedToCheckout();
  });

  await test.step('Fill checkout information', async () => {
    await checkoutInformation.fillCheckoutInformation({
      firstName: 'John',
      lastName: 'Doe',
      postalCode: '12345',
    });
    await checkoutInformation.continue();
  });

  await test.step('Validate order summary', async () => {
    await checkoutOverview.validateTotal();
  });

  await test.step('Complete the order', async () => {
    await checkoutOverview.finish();
  });

  await test.step('Verify confirmation message', async () => {
    await checkoutComplete.expectConfirmationMessage();
  });

  await test.step('Logout from application', async () => {
    await header.logout();
  });
});