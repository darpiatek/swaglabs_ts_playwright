import { Page } from '@playwright/test';
import { HeaderComponentLocators } from './header-locators';

export class HeaderComponent {
  private readonly locators: HeaderComponentLocators;

  constructor(private readonly page: Page) {
    this.locators = new HeaderComponentLocators(page);
  }

  async logout() {
    await this.locators.menuButton.click();
    await this.locators.logoutButton.click();
  }
}