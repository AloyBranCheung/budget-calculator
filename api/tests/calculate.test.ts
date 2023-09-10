import calculateCurrSpendables from "../utils/calculateSpendables";

describe("test calculations", () => {
  it("should calculate new spendables with new total amount", async () => {
    const TOTAL = 100;
    expect(calculateCurrSpendables(TOTAL)).toEqual({
      budget: {
        total: 100,
        remaining: 100,
      },
      needs: {
        total: 50,
        remaining: 50,
      },
      wants: {
        total: 30,
        remaining: 30,
      },
      savings: {
        total: 20,
        remaining: 20,
      },
    });
  });
});
