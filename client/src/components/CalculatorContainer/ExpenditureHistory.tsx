import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import ExpendCategory from "./ExpendCategory";
import { ExpenditureItem } from "../../@types/expenditures";

const DUMMY_ITEMS: ExpenditureItem[] = [
  {
    id: 0,
    value: 69,
    date: 1681518044,
    description: "food at gyugyuya",
    categories: [
      {
        color: "white",
        tagCategory: "Enum",
        backgroundColor: "red",
      },
    ],
  },
  {
    id: 0,
    value: 69,
    date: 1681518044,
    description: "food at gyugyuya",
    categories: [
      {
        color: "white",
        tagCategory: "Enum",
        backgroundColor: "red",
      },
    ],
  },
];

export default function ExpenditureHistory() {
  return (
    <div>
      <SectionTitle className="mb-2" bold title="Expenditures" />
      <div className="flex flex-col gap-5">
        <ExpendCategory items={DUMMY_ITEMS} title="Necessities" />
        <ExpendCategory items={DUMMY_ITEMS} title="Wants" />
        <ExpendCategory items={DUMMY_ITEMS} title="Savings" />
      </div>
    </div>
  );
}
