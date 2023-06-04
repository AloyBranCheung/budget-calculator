import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// mocks
import MOCK_BUDGET_DATA_API_RESPONSE from "../mocks/mockBudgetDataApiResponse";
// component
import Spendables from "../components/CalculatorContainer/Spendables";

const GREEN = "bg-green-200";
const YELLOW = "bg-yellow-200";
const RED = "bg-red-200";

const STARTING_AMOUNT = 2000;
const REMAINING_YELLOW = STARTING_AMOUNT * 0.49;
const REMAINING_RED = STARTING_AMOUNT * 0.29;

const DIFF_TEST_PARAMS = [
  {
    budgetData: MOCK_BUDGET_DATA_API_RESPONSE(STARTING_AMOUNT, STARTING_AMOUNT),
    expectColor: GREEN,
    expectNeedsTotal: STARTING_AMOUNT * 0.5,
    expectNeedsRemaining: STARTING_AMOUNT * 0.5,
    expectWantsTotal: STARTING_AMOUNT * 0.3,
    expectWantsRemaining: STARTING_AMOUNT * 0.3,
    expectSavingsTotal: STARTING_AMOUNT * 0.2,
    expectSavingsRemaining: STARTING_AMOUNT * 0.2,
  },
  {
    budgetData: MOCK_BUDGET_DATA_API_RESPONSE(
      STARTING_AMOUNT,
      REMAINING_YELLOW
    ),
    expectColor: YELLOW,
    expectNeedsTotal: STARTING_AMOUNT * 0.5,
    expectNeedsRemaining: REMAINING_YELLOW * 0.5,
    expectWantsTotal: STARTING_AMOUNT * 0.3,
    expectWantsRemaining: REMAINING_YELLOW * 0.3,
    expectSavingsTotal: STARTING_AMOUNT * 0.2,
    expectSavingsRemaining: REMAINING_YELLOW * 0.2,
  },
  {
    budgetData: MOCK_BUDGET_DATA_API_RESPONSE(STARTING_AMOUNT, REMAINING_RED),
    expectColor: RED,
    expectNeedsTotal: STARTING_AMOUNT * 0.5,
    expectNeedsRemaining: REMAINING_RED * 0.5,
    expectWantsTotal: STARTING_AMOUNT * 0.3,
    expectWantsRemaining: REMAINING_RED * 0.3,
    expectSavingsTotal: STARTING_AMOUNT * 0.2,
    expectSavingsRemaining: REMAINING_RED * 0.2,
  },
];

test.each(DIFF_TEST_PARAMS)(
  "it should load and display spendables remaining (with corresponding green, yellow, red colors) and spendables total",
  async ({
    budgetData,
    expectColor,
    expectNeedsTotal,
    expectNeedsRemaining,
    expectWantsTotal,
    expectWantsRemaining,
    expectSavingsTotal,
    expectSavingsRemaining,
  }) => {
    render(<Spendables isLoading={false} budgetData={budgetData} />);

    const needsRemaining = screen.getByRole("heading", {
      name: `$${expectNeedsRemaining}.00 remaining`,
    });
    const needsTotal = screen.getByRole("heading", {
      name: `$${expectNeedsTotal}.00 total`,
    });
    const wantsRemaining = screen.getByRole("heading", {
      name: `$${expectWantsRemaining}.00 remaining`,
    });
    const wantsTotal = screen.getByRole("heading", {
      name: `$${expectWantsTotal}.00 total`,
    });
    const savingsRemaining = screen.getByRole("heading", {
      name: `$${expectSavingsRemaining}.00 remaining`,
    });
    const savingsTotal = screen.getByRole("heading", {
      name: `$${expectSavingsTotal}.00 total`,
    });

    expect(needsRemaining).toHaveClass(expectColor);
    expect(needsRemaining).toHaveTextContent(
      `$${expectNeedsRemaining}.00 remaining`
    );
    expect(needsTotal).toHaveTextContent(`$${expectNeedsTotal}.00 total`);

    expect(wantsRemaining).toHaveClass(expectColor);
    expect(wantsRemaining).toHaveTextContent(
      `$${expectWantsRemaining}.00 remaining`
    );
    expect(wantsTotal).toHaveTextContent(`$${expectWantsTotal}.00 total`);

    expect(savingsRemaining).toHaveClass(expectColor);
    expect(savingsRemaining).toHaveTextContent(
      `$${expectSavingsRemaining}.00 remaining`
    );
    expect(savingsTotal).toHaveTextContent(`$${expectSavingsTotal}.00 total`);
  }
);
