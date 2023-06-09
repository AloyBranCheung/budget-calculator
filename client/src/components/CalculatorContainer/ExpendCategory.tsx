import React from "react";
import TitleText from "../UI/typography/TitleText";
// utils/types
import { CategoryItems } from "../../@types/budgetData";
import ExpendItem from "./ExpendItem";
import { startCase } from "lodash";

interface ExpendCategoryProps {
  title: string;
  items: CategoryItems[];
  onConfirm: (itemId: string, category: string) => void;
}

export default function ExpendCategory({
  title,
  items,
  onConfirm,
}: ExpendCategoryProps) {
  const expenditureItems = items.map((item) => (
    <ExpendItem
      key={`${item._id}-${item.description}`}
      item={item}
      category={title}
      onConfirm={onConfirm}
    />
  ));

  return (
    <div className="flex flex-col gap-2">
      <TitleText bold title={startCase(title)} />
      <div className="flex gap-2 flex-wrap">{expenditureItems}</div>
    </div>
  );
}
