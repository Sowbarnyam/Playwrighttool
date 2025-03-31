const { test, expect } = require('@playwright/test');

test('Handling Pages, Multiple Pages, and Popups on HerokuApp', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // ------------------ Handling a Single Page ------------------
    await page.goto('https://the-internet.herokuapp.com/');

    // Verify page title
    console.log(`Main Page Title: ${await page.title()}`);
    await expect(page).toHaveTitle(/The Internet/);

    // ------------------ Handling Multiple Pages ------------------
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto('https://the-internet.herokuapp.com/windows'); // Page with new window link
    await page2.goto('https://the-internet.herokuapp.com/upload');
    

    console.log(`Page 1 Title: ${await page1.title()}`);
    console.log(`Page 2 Title: ${await page2.title()}`);

    // ------------------ Handling New Pages (Tabs) ------------------
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Waits for a new page event
        page1.click('a[href="/windows/new"]') // Clicks "Click Here" link to open a new tab
    ]);

    console.log(`New Page Opened: ${newPage.url()}`);
    await newPage.bringToFront(); // Switch to new tab
    await expect(newPage.locator('h3')).toHaveText('New Window');
    await browser.close();
});
