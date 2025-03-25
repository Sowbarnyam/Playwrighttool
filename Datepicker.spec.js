const { test, expect } = require('@playwright/test');

test('date picker', async ({ page }) => {
    
      await page.goto('https://jqueryui.com/datepicker/');
    
        // Switch to the iframe containing the date picker
        const frame = await page.frameLocator('iframe.demo-frame');
    
        // Click to open the date picker
        await frame.locator('#datepicker').click();
    
        // Select a date (Example: Click on the 15th)
        await frame.locator('//td[@data-handler="selectDay"]/a[text()="15"]').click();
        await page.waitForTimeout(3000);

        // Verify the selected date
        const selectedDate = await frame.locator('#datepicker').inputValue();
        console.log("Selected Date:", selectedDate);
        await page.waitForTimeout(3000);

    });
    
    