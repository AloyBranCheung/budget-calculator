import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
// types
import { BudgetDataAPIResponse } from "../../@types/budgetData";
import colorCode from "../../utils/colorCode";
import SpendableCategory from "./SpendableCategory";

interface SpendablesProps {
  isLoading: boolean;
  budgetData: BudgetDataAPIResponse | undefined;
}

export default function Spendables({ isLoading, budgetData }: SpendablesProps) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionTitle bold title="Current Spendables" />
        <p>
          The following is calculated by the 50/30/20 rule where 50% of your
          income is for <b>needs</b> (e.g. rent, groceries), 30% of your income
          is for <b>wants</b> (e.g. restaurants, movies) and 20% of your income
          is for <b>savings</b> (e.g. in investments, savings accounts).
        </p>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <SpendableCategory
          isLoading={isLoading}
          categoryName="Needs (50%)"
          categoryTotal={`$${
            budgetData?.current && budgetData.current.needs.total.toFixed(2)
          } total`}
          categoryRemaining={`$${
            budgetData?.current &&
            budgetData?.current.needs.remaining.toFixed(2)
          } remaining`}
          colorCode={
            (budgetData?.current &&
              colorCode(
                budgetData.current.needs.remaining,
                budgetData.current.needs.total
              )) ||
            ""
          }
        />
        <SpendableCategory
          isLoading={isLoading}
          categoryName="Wants (30%)"
          categoryTotal={`$${
            budgetData?.current && budgetData.current.wants.total.toFixed(2)
          } total`}
          categoryRemaining={`$${
            budgetData?.current &&
            budgetData?.current.wants.remaining.toFixed(2)
          } remaining`}
          colorCode={
            (budgetData?.current &&
              colorCode(
                budgetData.current.wants.remaining,
                budgetData.current.wants.total
              )) ||
            ""
          }
        />
        <SpendableCategory
          isLoading={isLoading}
          categoryName="Savings (20%)"
          categoryTotal={`$${
            budgetData?.current && budgetData.current.savings.total.toFixed(2)
          } total`}
          categoryRemaining={`$${
            budgetData?.current &&
            budgetData?.current.savings.remaining.toFixed(2)
          } remaining`}
          colorCode={
            (budgetData?.current &&
              colorCode(
                budgetData.current.savings.remaining,
                budgetData.current.savings.total
              )) ||
            ""
          }
        />
      </div>
    </div>
  );
}
