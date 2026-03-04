import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page/login-page';
import { config } from '../../data/environments';
import fs from 'fs';

setup('authenticate', async ({ page }) => {
  // upewnij się że folder istnieje
  if (!fs.existsSync('.auth')) {
    fs.mkdirSync('.auth');
  }

  await page.goto('/');

  const loginPage = new LoginPage(page);

  await loginPage.login(
    config.users.standard.username,
    config.users.standard.password
  );

  await expect(page).toHaveURL(/inventory/);

  await page.context().storageState({
    path: '.auth/storageState.json',
  });
});