const { test, expect } = require('@playwright/test');

test('Assertions in Playwright', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');
await page.pause();
// ASSERTIONS
// check element present or not
await expect (page.locator('text=The Kitchen')).toHaveCount (1)


if (await page.$('text=The Kitchen' )){
await page. locator('text=The Kitchen' ).click()
}
// check element visible
await expect (page. locator ('text=The Kitchen' )).toBeVisible()
console.log('Text the kitchen is visible');

// check element enabled 
await expect(page. locator ('text=The Kitchen')). toBeEnabled()
console.log('Text the kitchen is enabled');

// check text
await expect (page.locator ('text=The Kitchen')). toHaveText( 'The Kitchen')
await expect(page.locator('text=The Kitchen' )).not. toHaveText('The Kitchen!' )
console.log('Having the Text  kitchen');

// check attribute value
await expect(page. locator ('text=The Kitchen')). toHaveAttribute( 'class', /. *css-dpmy2a/)
await expect(page. locator ('text=The Kitchen')). toHaveClass(/.*css-dpmy2a/)
// check page url and title
await expect (page) .toHaveURL ('https://kitchen.applitools.com/')
await expect (page) .toHaveTitle(/-*Kitchen/)
await page.pause();
});