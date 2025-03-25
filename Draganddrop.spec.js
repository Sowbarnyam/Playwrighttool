const { test, expect } = require('@playwright/test');

test('Drag and drop', async ({ page }) => {
   
      // Navigate to a page with drag and drop functionality
        await page.goto('https://demos.telerik.com/kendo-ui/dragdrop/index');
    
        // Select the source and target elements
        const source = await page.locator('#draggable');
        await page.waitForTimeout(3000);

        const target = await page.locator('#droptarget');
        await page.waitForTimeout(3000);

    
        // Perform drag and drop
        await source.dragTo(target);
    
        // Wait to observe the result
        await page.waitForTimeout(3000);
    
    });
    
