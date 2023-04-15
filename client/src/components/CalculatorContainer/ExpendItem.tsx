import React from "react";
import { ExpenditureItem } from "../../@types/expenditures";
import SectionTitle from "../UI/typography/SectionTitle";
import TitleText from "../UI/typography/TitleText";
import Chip from "../UI/Chip";

interface ExpendItemProps {
  item: ExpenditureItem;
}

export default function ExpendItem({ item }: ExpendItemProps) {
  return (
    <div className="border-2 border-solid rounded-2xl border-black p-5 ">
      <TitleText className="text-4xl" title={`$ ${item.value.toFixed(2)}`} />
      <TitleText title={`Description: ${item.description}`} />
      <div className="flex gap-5">
        <TitleText title="Tags:" />
        <div className="flex flex-wrap gap-1">
          {item.categories.map((tag) => {
            return (
              <Chip
                key={`${tag.color}${tag.tagCategory}`}
                label={tag.tagCategory}
                color={tag.color}
                backgroundColor={tag.backgroundColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
