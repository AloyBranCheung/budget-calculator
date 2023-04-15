import React from "react";
import TitleText from "../UI/typography/TitleText";
// utils/types
import { ExpenditureItem } from "../../@types/expenditures";
import ExpendItem from "./ExpendItem";

interface ExpendCategoryProps {
  title: string;
  items: ExpenditureItem[];
}

export default function ExpendCategory({ title, items }: ExpendCategoryProps) {
  const expenditureItems = items.map((item) => (
    <ExpendItem key={`${item.id}-${item.description}`} item={item} />
  ));

  return (
    <div>
      <TitleText title={title} />
      {expenditureItems}
    </div>
  );
}
