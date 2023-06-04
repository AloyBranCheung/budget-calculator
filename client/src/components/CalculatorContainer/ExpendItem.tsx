import React, { useState } from "react";
import TitleText from "../UI/typography/TitleText";
import { CategoryItems } from "../../@types/budgetData";
import dayjs from "dayjs";
import ConfirmationDialog from "../UI/ConfirmationDialog";

interface ExpendItemProps {
  item: CategoryItems;
  category: string;
  onConfirm: (itemId: string, category: string) => void;
}

export default function ExpendItem({
  item,
  onConfirm,
  category,
}: ExpendItemProps) {
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <div className="border-2 border-solid rounded-2xl border-black p-5 xs:max-w-min sm:max-w-xs flex flex-col">
      <ConfirmationDialog
        isOpen={isConfirm}
        onNo={() => setIsConfirm(false)}
        onConfirm={() => onConfirm(item._id, category)}
      >
        <>
          <h3 className="text-2xl">
            <b>Are you sure you want to delete this expenditure?</b>
          </h3>
          <div>
            <p>
              <b>Date Added:</b> {dayjs(item.date).format("YYYY-MM-DD")}
            </p>
            <p>
              <b>Name:</b> {item.description}
            </p>
            <p>
              <b>Amount:</b> {item.amount.toFixed(2)}
            </p>
            <p>
              <b>Tags:</b> WIP
            </p>
          </div>
        </>
      </ConfirmationDialog>

      <div
        className="w-5 h-5 self-end cursor-pointer"
        onClick={() => setIsConfirm(true)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5368/5368396.png"
          alt="delete"
        />
      </div>
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
