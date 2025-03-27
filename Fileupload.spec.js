const { test, expect } = require('@playwright/test');

test('File Upload on Expand Testing Site', async ({ page }) => {
    // Navigate to the file upload page
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.pause();

    await page.locator("#file-upload").setInputFiles("C:\\Users\\DCKLP-101\\eclipse-workspace\\Demoproject\\Googleimage.png");
    await page.waitForTimeout(2000);
    await page.locator('#file-submit').click()
    console.log("Successfully uploaded");

    //Multiple image upload
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.pause();
    await page.locator("#file-upload").setInputFiles("C:\\Users\\DCKLP-101\\eclipse-workspace\\Demoproject\\Googleimage.png",
        "C:\\Users\\DCKLP-101\\eclipse-workspace\\Demoproject\\Youtube.png"
        );
    await page.waitForTimeout(2000);
    await page.locator('#file-submit').click()
    console.log("Successfully uploaded");

        });