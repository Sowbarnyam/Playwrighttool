const { test, expect } = require('@playwright/test');

test('User interactions in Playwright', async ({ page }) => {
    // Navigate to the webpage
    await page.goto('https://demo.applitools.com/'); // Updated URL to Applitools demo

    await expect(await page.locator('#username')).toBeVisible();
    await expect(await page.locator('#username')).toBeEmpty();
    await expect(await page.locator('#username')).toBeEnabled();
    await expect(await page.locator('#username')).toBeEditable();

    await expect(await page.locator('#password')).toBeVisible();
    await expect(await page.locator('#password')).toBeEmpty();
    await expect(await page.locator('#password')).toBeEnabled();
    await expect(await page.locator('#password')).toBeEditable();


    // Text Input
    await page.locator('#username').fill('sowbarnya');
    await page.locator('#password').fill('1234');
    
    // Clicking a button (Login)
    await page.locator('#log-in').click();

    // Scrolling
    await page.locator('.element-balances').scrollIntoViewIfNeeded();
    await page.mouse.wheel(0, 500);
    
    
});
