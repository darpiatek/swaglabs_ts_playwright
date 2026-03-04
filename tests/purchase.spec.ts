import { PRODUCTS } from '../data/products';
import { test, expect } from '../fixtures/base-test'

// test.describe.configure({ mode: 'parallel' });

test('Standard user completes a purchase successfully', async ({
  inventory,
  cart,
  checkoutInformation,
  checkoutOverview,
  checkoutComplete,
  header,
}) => {
  let cartTotal = 0;

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
    cartTotal = await cart.getProductsTotal();
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
    await checkoutOverview.validateTotal(cartTotal);
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


test('Standard user purchases cheapest and most expensive product', async ({
  inventory,
  cart,
  checkoutInformation,
  checkoutOverview,
  checkoutComplete,
  header,
}) => {

  let cartTotal = 0;
  let selectedProducts: string[] = [];

  await test.step('Open inventory page', async () => {
    await inventory.goto();
  });

  await test.step('Sort products by price (low to high)', async () => {
    await inventory.sortByPriceLowToHigh();
  });

  await test.step('Validate sorting low to high', async () => {
  await inventory.validateSortedLowToHigh();
  });

  await test.step('Add first and last product to cart', async () => {
    const first = await inventory.getFirstProductName();
    const last = await inventory.getLastProductName();

    selectedProducts = [first, last];

    await inventory.addProductToCart(first);
    await inventory.addProductToCart(last);
  });

  await test.step('Navigate to shopping cart', async () => {
    await inventory.goToCart();
    cartTotal = await cart.getProductsTotal();
  });

  await test.step('Validate product names in cart', async () => {
    await cart.validateProductNames(selectedProducts);
  });

  await test.step('Proceed to checkout', async () => {
    await cart.proceedToCheckout();
  });

  await test.step('Fill checkout information', async () => {
    await checkoutInformation.fillCheckoutInformation({
      firstName: 'Jan',
      lastName: 'Kowalski',
      postalCode: '12345',
    });
    await checkoutInformation.continue();
  });

  await test.step('Validate order total', async () => {
    await checkoutOverview.validateTotal(cartTotal);
  });

  await test.step('Validate product names in order overview', async () => {
    await checkoutOverview.validateProductNames(selectedProducts);
  });

  await test.step('Finish checkout', async () => {
    await checkoutOverview.finish();
  });

  await test.step('Verify confirmation message', async () => {
    await checkoutComplete.expectConfirmationMessage();
  });

  await test.step('Logout', async () => {
    await header.logout();
  });
});