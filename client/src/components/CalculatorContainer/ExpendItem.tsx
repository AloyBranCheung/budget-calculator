import React from "react";
import SectionTitle from "../UI/typography/SectionTitle";
import TitleText from "../UI/typography/TitleText";
import Chip from "../UI/Chip";
import { CategoryItems } from "../../@types/budgetData";

interface ExpendItemProps {
  item: CategoryItems;
}

export default function ExpendItem({ item }: ExpendItemProps) {
  return (
    <div className="border-2 border-solid rounded-2xl border-black p-5 xs:max-w-min sm:max-w-xs">
      <TitleText
        bold
        className="text-4xl bg-red-200"
        title={`$ ${item.amount.toFixed(2)}`}
      />
      <div>
        <TitleText bold title={`Description:`} />
        <TitleText title={item.description} />
      </div>
      <div className="flex gap-5">
        <TitleText bold title="Tags:" />
        <div className="flex flex-wrap gap-1">
          WIP
          {/* {item.categories.map((tag) => {
            return (
              <Chip
                key={`${tag.color}${tag.tagCategory}`}
                label={tag.tagCategory}
                color={tag.color}
                backgroundColor={tag.backgroundColor}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
