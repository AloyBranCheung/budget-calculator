import { testWithLogin } from "./fixtures/login-fixture.js";
import { expect } from "@playwright/test";

testWithLogin(
  "it should add and remove expenditure",
  async ({ page, login }) => {
    await login;
    // act
    await page.getByRole("combobox").selectOption("needs");
    await page.locator('input[name="date"]').fill("2023-06-04");
    await page.getByPlaceholder("Description").click();
    await page.getByPlaceholder("Description").fill("test remove this");
    await page.locator('input[name="amount"]').click();
    await page.locator('input[name="amount"]').fill("0123");
    await page.getByRole("button", { name: "Add" }).click();
    await page.getByRole("heading", { name: "test remove this" }).click();
    // expect successful add
    expect(
      await page.getByRole("heading", { name: "test remove this", exact: true })
    ).toContainText("test remove this");

    await page.getByRole("img", { name: "delete" }).click();
    await page.getByRole("button", { name: "Yes" }).click();
    await page.waitForTimeout(3000);

    // expect successful remove
    expect(
      await page
        .getByRole("heading", { name: "test remove this", exact: true })
        .count()
    ).toEqual(0);
  }
);
