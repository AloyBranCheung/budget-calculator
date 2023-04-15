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
          income is for <b>needs</b> (e.g. rent, groceries), 30% of your income
          is for <b>wants</b> (e.g. restaurants, movies) and 20% of your income
          is for <b>savings</b> (e.g. in investments, savings accounts).
        </p>
      </div>
      <div className="flex flex-col gap-5 w-max">
        <div className="flex gap-5 justify-between">
          <TitleText title="Needs (50%):" />
          <TitleText title="$value remaining" />
        </div>
        <div className="flex gap-5 justify-between">
          <TitleText title="Wants (30%):" />
          <TitleText title="$value remaining" />
        </div>
        <div className="flex gap-5 justify-between">
          <TitleText title="Savings (20%):" />
          <TitleText title="$value remaining" />
        </div>
      </div>
    </div>
  );
}
