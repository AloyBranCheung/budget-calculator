import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// component
import AddExpenditure from "../components/CalculatorContainer/AddExpenditure";

test("it should trigger form errores when description and amount is not filled", async () => {
  // arrange
  render(<AddExpenditure />);

  screen.debug();
});
