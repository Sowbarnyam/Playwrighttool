import { test, expect } from "@playwright/test";
import { LoginPage } from "./POM/Pomloginpage";

test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");

    expect(await loginPage.isLoginSuccessful()).toBeTruthy();
    console.log('Successfully loggedin.');

});

test("Login with invalid credentials should show an error", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("locked_out_user", "wrong_password");

    expect(await loginPage.getErrorMessage()).toContain("Username and password do not match");
    console.log('Successfully loggedin without invalid credentials.');

});
