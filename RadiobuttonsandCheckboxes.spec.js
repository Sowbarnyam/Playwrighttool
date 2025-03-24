const { test, expect } = require('@playwright/test');

test('User interactions in Playwright', async ({ page }) => {
    // Navigate to Guru99 Radio Button Page
    await page.goto('https://demo.guru99.com/test/radio.html');

    // Interact with radio buttons
    await page.locator('#vfb-7-1').check(); // Select radio button 1
    await page.locator('#vfb-7-2').check(); // Select radio button 2
    await page.locator('#vfb-7-3').check(); // Select radio button 3
    await page.locator('#vfb-7-2').uncheck();
    // Interact with checkboxes
    await page.locator('#vfb-6-0').check(); // Check checkbox 1
    await page.locator('#vfb-6-1').check(); // Check checkbox 2
    await page.locator('#vfb-6-2').check(); // Check checkbox 3

    // Uncheck a checkbox
    await page.locator('#vfb-6-1').uncheck(); // Uncheck checkbox 2

    // Close browser after 5 seconds
    setTimeout(async () => {
        await browser.close();
    }, 5000);

});