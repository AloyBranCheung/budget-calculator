import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import ExpendCategory from "./ExpendCategory";
import { ExpenditureItem } from "../../@types/Expenditures";

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
];

export default function ExpenditureHistory() {
  return (
    <div>
      <SectionTitle bold title="Expenditures" />
      <div className="flex flex-col gap-5">
        <ExpendCategory items={DUMMY_ITEMS} title="Necessities" />
        <ExpendCategory items={DUMMY_ITEMS} title="Wants" />
        <ExpendCategory items={DUMMY_ITEMS} title="Savings" />
      </div>
    </div>
  );
}
