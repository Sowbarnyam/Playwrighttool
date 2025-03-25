const { test, expect } = require('@playwright/test');

test('Web table', async ({ page }) => {
   
        await page.goto('https://demo.guru99.com/test/web-table-element.php');
    
        // Locate the table
        const table = page.locator('.dataTable');
     // Get all rows (excluding headers)
        const rows = await table.locator('tbody tr').all();
    
        console.log("Full Table Data:");
        for (const row of rows) {
            const cells = await row.locator('td').all();
            const rowData = await Promise.all(cells.map(cell => cell.textContent()));
            console.log(rowData);
}
    // Click a row where the company name is 'UCO Bank'
        const rowToClick = page.locator('.dataTable tbody tr', { hasText: 'UCO Bank' });
        if (await rowToClick.count() > 0) {
            console.log("Clicking on row: UCO Bank");
            await rowToClick.first().click();

        } 
        await page.waitForTimeout(3000);

        // Extract and print a specific column (Current Price)
        const priceColumn = await page.locator('.dataTable tbody tr td:nth-child(4)').all();
        const prices = await Promise.all(priceColumn.map(cell => cell.textContent()));
    
        console.log("\nCurrent Prices:");
        console.log(prices);
    
    });
    