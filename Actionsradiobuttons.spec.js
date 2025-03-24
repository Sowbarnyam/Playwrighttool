const { test, expect } = require('@playwright/test');

test('User interactions in Playwright', async ({ page }) => {
   // Navigate to Test Automation Practice Page
    await page.goto('https://training.rcvacademy.com/test-automation-practice-page');

    
    // Interact with radio buttons
    await page.locator('#java').check(); // Select a radio button
    await page.locator('#css').check();
    await page.locator('#javascript').check();
    await page.locator('#python').check();

    await page.locator('#java').uncheck(); // DeSelect a radio button
    await page.locator('#css').uncheck();
    await page.locator('#javascript').uncheck();
   

});
