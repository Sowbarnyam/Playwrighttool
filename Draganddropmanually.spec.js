const { test, expect } = require('@playwright/test');

test('Drag and drop', async ({ page }) => {

    // Navigate to a page with drag and drop functionality
    await page.goto('https://demos.telerik.com/kendo-ui/dragdrop/index');

    // Locate source and target elements
    const source = await page.locator('#draggable');
    await page.waitForTimeout(3000);

    const target = await page.locator('#droptarget');

    // Get bounding boxes of elements
    const sourceBox = await source.boundingBox();
    const targetBox = await target.boundingBox();

    if (sourceBox && targetBox) {
        // Move to source element
        await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
        await page.waitForTimeout(3000);

        
        // Click and hold the mouse
        await page.mouse.down();
        
        // Move to target element
        await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2, { steps: 10 });
        await page.waitForTimeout(3000);

        // Release the mouse
        await page.mouse.up();
        await page.waitForTimeout(3000);

    }
});
