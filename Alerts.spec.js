const { test, expect } = require('@playwright/test');

test('Alerts in Playwright', async ({ page }) => {

    // Listen for dialogs and handle them accordingly
    page.on('dialog', async dialog => {
        console.log(`Dialog Type: ${dialog.type()}`);
        console.log(`Dialog Message: ${dialog.message()}`);

        if (dialog.type() === 'prompt') {
            await dialog.accept('Playwright Response'); // Provide input for prompt
        } else {
            await dialog.accept(); // Accept all other dialogs
        }
    });

    // Navigate to a test page with JavaScript alerts
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.pause();

    // Trigger Alert
    console.log("Triggering Alert...");
    await page.click('text=Click for JS Alert');
    await page.waitForTimeout(3000); // Wait to observe

    // Trigger Confirm
    console.log("Triggering Confirm...");
    await page.click('text=Click for JS Confirm');
    await page.waitForTimeout(3000); // Wait to observe

    // Trigger Prompt
    console.log("Triggering Prompt...");
    await page.click('text=Click for JS Prompt');
    await page.waitForTimeout(3000); // Wait to observe

});
