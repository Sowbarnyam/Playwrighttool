const { test, expect } = require('@playwright/test');

test('User interactions in Playwright', async ({ page }) => {

    // Navigate to a demo page
    await page.goto('https://demoqa.com/buttons');
    await page.waitForURL('https://demoqa.com/buttons');

     // 1. Double-click a button
     await page.locator('#doubleClickBtn').dblclick();
     console.log('Button double-clicked!');
    // 2. Right-click a button
    await page.locator('#rightClickBtn').click({ button: 'right' });
    console.log('Button right-clicked!');

    // 4. Hover over an element (example menu item)
    await page.goto('https://demoqa.com/menu');
    await page.locator('//a[text()="Main Item 2"]').hover();
    console.log('Hovered over menu item!');

    // 5. Drag and Drop Example
    await page.goto('https://demoqa.com/droppable');
    const source = page.locator('#draggable'); // Draggable element
    const target = page.locator('#droppable'); // Drop target

    await source.hover();
    await page.mouse.down(); // Click and hold the draggable element
    await page.mouse.up(); // Release mouse button
    console.log('Element dragged and dropped!');

   
});
