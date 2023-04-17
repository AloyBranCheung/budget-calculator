import { test as base, expect } from "@playwright/test";

export const testWithLogin = base.extend({
  login: async ({ page }, use) => {
    await page.goto("http://localhost:3000/");
    // arrange
    const emailField = await page.getByPlaceholder("Email");
    const passwordField = await page.getByPlaceholder("Password");
    const heading = await page.getByRole("heading", { name: "SimpleyBudgets" });
    const loginText = await page.getByText("Login").first();
    // expect
    expect(heading);
    expect(loginText);
    expect(emailField);
    expect(passwordField);
    // act
    await passwordField.fill(process.env.PASSWORD!);
    await emailField.fill(process.env.USER!);
    await page.getByRole("button", { name: "Login" }).click();
    // assert
    expect(await page.getByRole("heading", { name: "SimplyBudgets" }));
    expect(await page.getByRole("button", { name: "Reset" }));
    expect(await page.getByRole("button", { name: "Logout" }));
    expect(await page.getByText("Current Budget"));
    expect(await page.getByText("Current Spendables"));

    await use(page);
  },
});
