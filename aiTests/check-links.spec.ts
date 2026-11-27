import { expect, test } from '@playwright/test';
import { DashboardPage } from '../aipageObjects/DashboardPage';
import { LoginPage } from '../aipageObjects/LoginPage';

test('OrangeHRM admin can log in', async ({ page }) => {
  const username = process.env.ORANGEHRM_USERNAME;
  const password = process.env.ORANGEHRM_PASSWORD;

  if (!username || !password) {
    throw new Error('Set ORANGEHRM_USERNAME and ORANGEHRM_PASSWORD in the .env file.');
  }

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login(username, password);
  await expect(page).toHaveURL(/\/web\/index\.php\/dashboard\/index/);
  await expect(dashboardPage.heading).toBeVisible({ timeout: 15_000 });
});
