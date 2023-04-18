import { test as base, expect } from "@playwright/test";

export const testWithLogin = base.extend({
  login: async ({ page }, use) => {
    await page.goto("/");
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

    // act (add budget)
    const addBudgetButton = await page.getByTestId("addBudgetButton");
    await addBudgetButton.click();
    await addBudgetButton.fill("2000");
    await page.getByRole("button", { name: "Update" }).click();

    // assert
    expect(await page.getByRole("heading", { name: "$2000.00" }));

    await use(page);
  },
});
