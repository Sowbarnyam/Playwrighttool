const { test } = require('@playwright/test');

test('Record Video', async ({ browser }) => {
    const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
    const page = await context.newPage();

    await page.goto('https://www.wikipedia.org/');
    await page.fill('#searchInput', 'Playwright Testing');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000); // Capture some interaction
    console.log("Successfully Captured");

    await context.close(); // Video will be saved in 'videos/' folder
});
