import React from "react";
import TitleText from "../UI/typography/TitleText";
// utils/types
import { CategoryItems } from "../../@types/budgetData";
import ExpendItem from "./ExpendItem";
import KeyValueText from "../UI/KeyValueText";

interface ExpendCategoryProps {
  title: string;
  items: CategoryItems[];
}

export default function ExpendCategory({ title, items }: ExpendCategoryProps) {
  const expenditureItems = items.map((item) => (
    <ExpendItem key={`${item._id}-${item.description}`} item={item} />
  ));

  return (
    <div className="flex flex-col gap-2">
      <TitleText bold title={title} />
      {/* <div>
        <KeyValueText label="Total:" value="$Value" />
        <KeyValueText label="Remaining:" value="$Value" />
      </div> */}
      <div className="flex gap-2 flex-wrap">{expenditureItems}</div>
    </div>
  );
}
