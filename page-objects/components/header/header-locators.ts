import { Page, Locator } from '@playwright/test';

export class HeaderComponentLocators {
  constructor(private readonly page: Page) {}

  get menuButton(): Locator {
    return this.page.locator('//button[@id="react-burger-menu-btn"]');
  }

  get logoutButton(): Locator {
    return this.page.locator('[data-test="complete-header"]');
  }
}