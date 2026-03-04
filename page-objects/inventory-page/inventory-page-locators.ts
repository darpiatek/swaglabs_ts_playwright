import { Page, Locator } from '@playwright/test';
import { logger } from '../../config/logger';

/**
 * Page Object locators for the Inventory page.
 *
 * This class centralizes all Playwright locators used on the inventory
 * (products listing) page. It follows the Page Object Model (POM) pattern
 * to keep selectors maintainable and reusable across tests.
 */
export class InventoryPageLocators {
  /**
   * Creates a new instance of InventoryPageLocators.
   *
   * @param page - Playwright Page instance used to resolve locators
   */
  constructor(private readonly page: Page) {
  }

  /**
   * Returns the locator for all product items displayed on the inventory page.
   *
   * @returns Playwright Locator targeting product item containers
   */
  get productItems(): Locator {
    logger.debug('Returning locator: productItems');
    return this.page.locator('[data-test="inventory-item"]');
  }

  /**
   * Returns the locator for product name elements.
   *
   * @returns Playwright Locator targeting product names
   */
  get productName(): Locator {
    logger.debug('Returning locator: productName');
    return this.page.locator('[data-test="inventory-item-name"]');
  }

  /**
   * Returns the locator for product price elements.
   *
   * @returns Playwright Locator targeting product prices
   */
  get productPrices(): Locator {
    logger.debug('Returning locator: productPrices');
    return this.page.locator('[data-test="inventory-item-price"]');
  }

  /**
   * Returns the button locator within a specific product item.
   *
   * Typically used for actions like "Add to cart" or "Remove".
   *
   * @param item - Locator representing a single product item
   * @returns Playwright Locator targeting the button inside the item
   */
  productButton(item: Locator): Locator {
    logger.debug('Returning locator: productButton for given item');
    return item.locator('button');
  }

  /**
   * Returns the locator for the product sorting dropdown.
   *
   * @returns Playwright Locator targeting the sort select element
   */
  get sort(): Locator {
    logger.debug('Returning locator: sort');
    return this.page.locator('[data-test="product-sort-container"]');
  }

  /**
   * Returns the locator for the shopping cart link/icon.
   *
   * @returns Playwright Locator targeting the cart link
   */
  get cartLink(): Locator {
    logger.debug('Returning locator: cartLink');
    return this.page.locator('.shopping_cart_link');
  }

  /**
   * Returns the locator for a specific product based on its name.
   *
   * The method filters product items by text and returns the first match.
   *
   * @param name - Name of the product to locate
   * @returns Playwright Locator targeting the matching product item
   */
  productByName(name: string): Locator {
    logger.debug(`Returning locator: productByName for "${name}"`);
    return this.productItems
      .filter({ hasText: name })
      .first();
  }
}