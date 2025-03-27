const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('File Download on HerokuApp', async ({ page }) => {
    // Navigate to the file download page
    await page.goto('https://the-internet.herokuapp.com/download');
    await page.pause();

    // Wait for the download event
    const [download] = await Promise.all([
        page.waitForEvent('download'),  // Waits for the download event
        page.locator('a:text("sample.pdf")').click()  // Clicks on the file link
        
    ]);
    await page.pause();
// Save the downloaded file to a specified path
    const filePath = 'C:\Users\DCKLP-101\Downloads';
    await download.saveAs(filePath);

    // Verify the file exists
    expect(fs.existsSync(filePath)).toBeTruthy();
    console.log("Successfully downloaded");
});
