import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import TitleText from "../UI/typography/TitleText";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function CurrBudgetDisplay() {
  return (
    <div>
      <SectionTitle bold title="Current Budget" />
      <TitleText title="Current Amount: $value" />
      <div className="flex gap-2 flex-col sm:flex-row sm:items-center">
        <TitleText title="Update amount?:" />
        <div className="flex gap-2">
          <Input
            value={69}
            onChange={() => console.log("changed")}
            type="number"
          />
          <Button onClick={() => console.log("clicked")} label="Update" />
        </div>
      </div>
    </div>
  );
}
