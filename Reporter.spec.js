import { test, expect } from '@playwright/test';

test('Check Playwright Homepage Title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
