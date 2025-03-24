const { test, expect } = require('@playwright/test');

test('Keyboard actions and focus', async ({ page }) => {
    // Navigate to jQuery UI Droppable page
    await page.goto('https://jqueryui.com/droppable/');

    // Switch to the iframe containing the drag and drop elements
    const frame = await page.frameLocator('iframe.demo-frame');

    // Select the draggable element and droppable target inside the iframe
    const source = frame.locator('#draggable');
    const target = frame.locator('#droppable');

    try {
        // First, try the built-in dragTo() method
        await source.dragTo(target);
        console.log('Drag-and-drop using dragTo() successful!');
    } catch (error) {
        console.log('dragTo() failed, switching to manual drag-and-drop.');

        // Get bounding boxes for manual dragging
        const sourceBox = await source.boundingBox();
        const targetBox = await target.boundingBox();

        if (sourceBox && targetBox) {
            await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
            await page.mouse.down(); // Click and hold

            await page.mouse.move(
                targetBox.x + targetBox.width / 2,
                targetBox.y + targetBox.height / 2,
                { steps: 15 } // Smooth movement
            );

            await page.mouse.up(); // Release mouse button
            console.log('Manual drag-and-drop completed!');
        } else {
            console.log('Bounding box not found for elements!');
        }
    }

});
