import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import TitleText from "../UI/typography/TitleText";
import Input from "../UI/Input";

export default function CurrBudgetDisplay() {
  return (
    <div>
      <SectionTitle title="Current Budget" />
      <TitleText title="Current Amount: $value" />
      <div className="flex gap-5 items-center">
        <TitleText title="Update amount: " />
        <Input
          value="test"
          onChange={() => console.log("changed")}
          type="text"
        />
      </div>
    </div>
  );
}
