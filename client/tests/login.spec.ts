import { expect } from "@playwright/test";
import { testWithLogin } from "./fixtures/login-fixture.js";

testWithLogin("logout", async ({ page, login }) => {
  // arrange
  await login;
  const logoutButton = await page.getByRole("button", { name: "Logout" });
  // act
  await logoutButton.click();
  // assert
  const emailField = await page.getByPlaceholder("Email");
  const passwordField = await page.getByPlaceholder("Password");
  const heading = await page.getByRole("heading", { name: "SimpleyBudgets" });
  const loginText = await page.getByText("Login").first();
  expect(heading);
  expect(loginText);
  expect(emailField);
  expect(passwordField);
});

testWithLogin("unsuccessful login", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  // arrange
  const emailField = await page.getByPlaceholder("Email");
  const passwordField = await page.getByPlaceholder("Password");
  const heading = await page.getByRole("heading", { name: "SimpleyBudgets" });
  const loginText = await page.getByText("Login").first();
  expect(heading);
  expect(loginText);
  expect(emailField);
  expect(passwordField);

  // act
  await passwordField.fill("wrongpassword");
  await emailField.fill("wrongemail");
  await page.getByRole("button", { name: "Login" }).click();

  // assert (form validation error)
  expect(heading);
  expect(await page.getByText("Invalid email"));

  // act
  await emailField.fill("wrongEmail@wrongEmail.com");

  // wrong login
  expect(await page.getByText("Firebase: Error (auth/user-not-found)."));
});
