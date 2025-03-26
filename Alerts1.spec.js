const { test, expect } = require('@playwright/test');

test('Alerts in Playwright', async ({ page }) => {

 // Listen for dialogs (beforeunload, alerts, confirm, print)
    page.on('dialog', async dialog => {
        console.log(`Dialog Type: ${dialog.type()}`);
        console.log(`Dialog Message: ${dialog.message()}`);

        if (dialog.type() === 'beforeunload') {
            await dialog.accept('Playwright Alerts' ); // Accept beforeunload to allow navigation
        }
    });

    // Navigate to a test website (Change to your preferred site)
    await page.goto('https://the-internet.herokuapp.com/');
    await page.pause();

    // Open the JavaScript Alerts page (contains alert, confirm, and prompt dialogs)
    await page.click('text=JavaScript Alerts');

    // Inject beforeunload event to trigger exit confirmation
    await page.evaluate(() => {
        window.addEventListener('beforeunload', event => {
            event.preventDefault();
            event.returnValue = ''; // This triggers the beforeunload dialog
        });
    });

    // Trigger the print dialog
    console.log("Triggering Print Dialog...");
    await page.evaluate(() => window.print());
    console.log("Print function executed!");

    // Wait to observe dialogs
    await page.waitForTimeout(2000);

    // Reload the page to trigger beforeunload dialog
    console.log("Attempting to reload the page...");
    await page.reload(); // This should trigger the beforeunload dialog


});
