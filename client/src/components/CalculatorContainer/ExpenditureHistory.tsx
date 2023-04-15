import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import ExpendCategory from "./ExpendCategory";
import { ExpenditureItem } from "../../@types/expenditures";

export default function ExpenditureHistory() {
  return (
    <div>
      <SectionTitle className="mb-2" bold title="Expenditures" />
      <div className="flex flex-col gap-5">
        <ExpendCategory items={[]} title="Necessities" />
        <ExpendCategory items={[]} title="Wants" />
        <ExpendCategory items={[]} title="Savings" />
      </div>
    </div>
  );
}
