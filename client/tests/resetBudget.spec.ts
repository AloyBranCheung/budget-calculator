import { testWithLogin } from "./fixtures/login-fixture.js";
import { expect } from "@playwright/test";

testWithLogin("reset budget success", async ({ page, login }) => {
  await login;

  // act
  await page.getByRole("button", { name: "Reset" }).click();

  // assert
  expect(await page.getByRole("heading", { name: "Are you sure?" }));

  // act
  await page.getByRole("button", { name: "Yes" }).click();

  // assert
  expect(await page.getByRole("heading", { name: "$0.00" }));
});

testWithLogin("reset budget cancel confirmation", async ({ page, login }) => {
  await login;

  // act
  const resetButton = await page.getByRole("button", { name: "Reset" });
  await resetButton.click();

  // assert
  expect(await page.getByRole("heading", { name: "Are you sure?" }));

  // act
  await page.getByRole("button", { name: "No" }).click();

  // assert
  expect(resetButton);
});
