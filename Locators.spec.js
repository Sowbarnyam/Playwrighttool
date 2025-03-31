const { test, expect } = require('@playwright/test');

test('Playwright Locators Demo on TodoMVC', async ({ page }) => {
    // Navigate to the Playwright demo site
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.pause();

    // ------------------ Locating Elements ------------------
    const todoInput = page.getByPlaceholder('What needs to be done?'); // Locate input field
    await todoInput.fill('Buy Groceries');
    await todoInput.press('Enter');
    await page.pause();

    await todoInput.fill('Write Playwright Tests');
    await todoInput.press('Enter');

    // Verify if the newly added items exist
    const todoByText = page.getByText('Buy Groceries');
    await expect(todoByText).toBeVisible();
    await page.pause();

    // ------------------ Filtering Locators ------------------
    const allTodos = page.locator('.todo-list li'); // Get all todo list items
    await expect(allTodos).toHaveCount(2); // Verify 2 items exist

    await allTodos.first().dblclick(); // Edit the first item
    await page.keyboard.press('Backspace');
    await page.keyboard.type('Buy Vegetables');
    await page.keyboard.press('Enter');
    await page.pause();

    await allTodos.last().click(); // Click the last item

    // ------------------ Locator Operators ------------------
    const completedItems = page.locator('.todo-list li').and(page.locator('.completed')); // Locate completed items

    await allTodos.nth(1).locator('.toggle').click(); // Mark second item as completed
    await expect(completedItems).toHaveCount(1);

    // ------------------ CSS Locators ------------------
    const footerText = page.locator('.footer'); // Footer section
    await expect(footerText).toBeVisible();
    await page.pause();

    // ------------------ Handling Lists ------------------
    const todoTexts = await allTodos.allTextContents(); // Get all todo texts
    console.log('Todo List:', todoTexts);
});
