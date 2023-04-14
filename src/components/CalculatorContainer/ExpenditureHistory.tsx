import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import ExpendCategory from "./ExpendCategory";

export default function ExpenditureHistory() {
  return (
    <div>
      <SectionTitle bold title="Expenditures" />
      <div className="flex flex-col gap-5">
        <ExpendCategory title="Necessities" />
        <ExpendCategory title="Wants" />
        <ExpendCategory title="Savings" />
      </div>
    </div>
  );
}
