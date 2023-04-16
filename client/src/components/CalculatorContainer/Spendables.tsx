import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import TitleText from "../UI/typography/TitleText";
// types
import { BudgetDataAPIResponse } from "../../@types/budgetData";
import colorCode from "../../utils/colorCode";

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
      <div className="flex flex-col gap-5 w-ful">
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col w-full">
            <TitleText
              className="text-lg break-normal w-full"
              title="Needs (50%):"
            />
            <TitleText
              className="text-md break-normal w-full"
              title={`$${
                budgetData && budgetData.current.needs.total.toFixed(2)
              } total`}
            />
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <TitleText
              className={`text-lg break-normal w-full ${
                budgetData &&
                colorCode(
                  budgetData.current.needs.remaining,
                  budgetData.current.needs.total
                )
              }`}
              title={`$${budgetData?.current.needs.remaining.toFixed(
                2
              )} remaining`}
            />
          )}
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col w-full">
            <TitleText
              className="text-lg break-normal w-full"
              title="Wants (30%):"
            />
            <TitleText
              className="text-md break-normal w-full"
              title={`$${
                budgetData && budgetData.current.wants.total.toFixed(2)
              } total`}
            />
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <TitleText
              className={`text-lg break-normal w-full ${
                budgetData &&
                colorCode(
                  budgetData.current.wants.remaining,
                  budgetData.current.wants.total
                )
              }`}
              title={`$${budgetData?.current.wants.remaining.toFixed(
                2
              )} remaining`}
            />
          )}
        </div>
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col w-full">
            <TitleText
              className="text-lg break-normal w-full"
              title="Savings (20%):"
            />
            <TitleText
              className="text-md break-normal w-full"
              title={`$${
                budgetData && budgetData.current.savings.total.toFixed(2)
              } total`}
            />
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <TitleText
              className={`text-lg break-normal w-full ${
                budgetData &&
                colorCode(
                  budgetData.current.savings.remaining,
                  budgetData.current.savings.total
                )
              }`}
              title={`$${budgetData?.current.savings.remaining.toFixed(
                2
              )} remaining`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
