const { test, expect } = require('@playwright/test');

test('Iframes in Playwright', async ({ page }) => {
    console.log("Opening UI.Vision iframe test page...");
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Handle **Frame 1** (Upper Left)
    const frame1 = await page.frameLocator('frame[src="frame_1.html"]');
    await frame1.locator('input[name="mytext1"]').fill('Hello Frame 1');
    console.log("Text entered in Frame 1");
    await page.waitForTimeout(3000);

    // Handle **Frame 2** (Upper Right)
    const frame2 = await page.frameLocator('frame[src="frame_2.html"]');
    await frame2.locator('input[name="mytext2"]').fill('Hello Frame 2');
    console.log("Text entered in Frame 2");
    await page.waitForTimeout(3000);

    // Handle **Frame 3** (Lower Left)
    const frame3 = await page.frameLocator('frame[src="frame_3.html"]');
    await frame3.locator('input[name="mytext3"]').fill('Hello Frame 3');
    console.log("Text entered in Frame 3");
    await page.waitForTimeout(3000);

    
});
