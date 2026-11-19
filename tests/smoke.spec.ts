import { test, expect } from '@playwright/test';

test('Playwright setup is working', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
