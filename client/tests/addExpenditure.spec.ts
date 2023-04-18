import { testWithLogin } from "./fixtures/login-fixture.js";
import { expect } from "@playwright/test";

testWithLogin("add expenditure to needs", async ({ page, login }) => {
  await login;
  // act
  await page
    .locator("div")
    .filter({ hasText: /^Update$/ })
    .getByRole("spinbutton")
    .fill("2000");
  await page.getByRole("button", { name: "Update" }).click();
  // assert
  expect(await page.getByRole("heading", { name: "$2000.00" }));

  // act
  await page.getByRole("combobox").selectOption("needs");
  await page.locator('input[name="date"]').fill("2023-04-17");
  await page.getByPlaceholder("Description").click();
  await page.getByPlaceholder("Description").fill("test add needs");
  await page.locator('input[name="amount"]').click();
  await page.locator('input[name="amount"]').fill("123");
  await page.getByRole("button", { name: "Add" }).click();

  // assert
  expect(await page.getByRole("heading", { name: "$877.00 remaining" }));
  expect(await page.getByText("$ 123.00"));
  expect(await page.getByText("Description:"));
  expect(await page.getByRole("heading", { name: "test add needs" }));
});
