import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import TitleText from "../UI/typography/TitleText";

export default function Spendables() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <SectionTitle bold title="Current Spendables" />
        <p>
          The following is calculated by the 50/30/20 rule where 50% of your
          income is for necessities (e.g. rent, groceries), 30% of your income
          is for wants (e.g. restaurants, movies) and 20% of your income is for
          saving (e.g. in investments, savings accounts).
        </p>
      </div>
      <div className="flex flex-col gap-5 w-max">
        <div className="flex gap-5 justify-between">
          <TitleText title="Necessities (50%):" />
          <TitleText title="$value" />
        </div>
        <div className="flex gap-5 justify-between">
          <TitleText title="Wants (30%):" />
          <TitleText title="$value" />
        </div>
        <div className="flex gap-5 justify-between">
          <TitleText title="Savings (20%):" />
          <TitleText title="$value" />
        </div>
      </div>
    </div>
  );
}
