import { test, expect } from "./Fixtureloginpage";

test("Verify successful login without checking inventory", async ({ loggedInPage }) => {
    // Check if we are logged in (e.g., by verifying the presence of the logout button)
    await expect(loggedInPage.locator("#react-burger-menu-btn")).toBeVisible();
});
