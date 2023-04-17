import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // arrange
  await page.goto("http://localhost:3000/");
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
  await emailField.fill(process.env.USER!);
  await passwordField.fill(process.env.PASSWORD!);
  await page.getByRole("button", { name: "Login" }).click();

  // assert
  expect(await page.getByRole("heading", { name: "SimplyBudgets" }));
  expect(await page.getByRole("button", { name: "Reset" }));
  expect(await page.getByRole("button", { name: "Logout" }));
  expect(await page.getByText("Current Budget"));
  expect(await page.getByText("Current Spendables"));
});
