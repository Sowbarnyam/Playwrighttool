const { test, expect } = require('@playwright/test');

test('Snapshot Testing', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');

    // Compare full page screenshot with snapshot
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');

    // Compare a specific element (search box) with snapshot
    const element = page.locator('#searchInput');
    expect(await element.screenshot()).toMatchSnapshot('search-box.png');
    console.log("Successfully Captured");

});
