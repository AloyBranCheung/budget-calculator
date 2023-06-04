import React from "react";
import TitleText from "../UI/typography/TitleText";
// utils/types
import { CategoryItems } from "../../@types/budgetData";
import ExpendItem from "./ExpendItem";

interface ExpendCategoryProps {
  title: string;
  items: CategoryItems[];
  onConfirm: (
    itemId: string,
    dialogRef: React.MutableRefObject<HTMLDialogElement | null>
  ) => void;
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
      onConfirm={onConfirm}
    />
  ));

  return (
    <div className="flex flex-col gap-2">
      <TitleText bold title={title} />
      <div className="flex gap-2 flex-wrap">{expenditureItems}</div>
    </div>
  );
}
