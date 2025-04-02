const { test, expect } = require('@playwright/test');

test('Take Screenshots', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.wikipedia.org/');

    // Full page screenshot
    await page.screenshot({ path: 'fullpage.png', fullPage: true });

    // Screenshot of a specific element (Wikipedia logo)
    const element = await page.locator('.central-textlogo__image');
    await element.screenshot({ path: 'wikipedia-logo.png' });
    console.log("Successfully Captured");

    await context.close();
});
