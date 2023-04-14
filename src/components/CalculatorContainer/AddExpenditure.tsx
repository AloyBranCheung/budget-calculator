import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";

export default function AddExpenditure() {
  return (
    <div>
      <SectionTitle title="Add Expenditure" bold />
      <div>
        *Category dropdown menu where after selecting a category, the rest of
        the UI will reveal showing tags, amount, add/cancel*
      </div>
    </div>
  );
}
