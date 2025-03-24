const { test, expect } = require('@playwright/test');

test('User interactions in Playwright', async ({ page }) => {

    // Navigate to The Internet Herokuapp Dropdown Page
    await page.goto('http://the-internet.herokuapp.com/dropdown');

    // Interact with single select dropdown
    await page.locator('#dropdown').selectOption('1'); // Select Option 1
    await page.locator('#dropdown').selectOption('2'); // Select Option 2

    // Multi-select dropdown interaction (if applicable, using JavaScript execution)
    await page.evaluate(() => {
        let select = document.getElementById('dropdown');
        select.multiple = true; // Enable multi-select if not enabled
        select.options[0].selected = true;
        select.options[1].selected = true;
    });

    // Close browser after 5 seconds
    setTimeout(async () => {
        await browser.close();
    }, 5000);
});