import React, { useState, useRef } from "react";
import TitleText from "../UI/typography/TitleText";
import { CategoryItems } from "../../@types/budgetData";
import Button from "../UI/Button";
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
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isConfirm, setIsConfirm] = useState(false);

  const handlePromptConfirmation = () => {
    setIsConfirm(true);
    dialogRef?.current?.showModal();
  };

  const handleNo = () => {
    setIsConfirm(false);
    dialogRef?.current?.close();
    5;
  };

  return (
    <div className="border-2 border-solid rounded-2xl border-black p-5 xs:max-w-min sm:max-w-xs flex flex-col">
      <ConfirmationDialog onConfirm={() => onConfirm(item._id, category)}>
        <>
          <h3 className="text-2xl">
            Are you sure you want to delete this expenditure?
          </h3>
          <div>
            <p>Date Added: {dayjs(item.date).format("YYYY-MM-DD")}</p>
            <p>Name: {item.description}</p>
            <p>Amount: {item.amount.toFixed(2)}</p>
            <p>Tags: WIP </p>
          </div>
        </>
      </ConfirmationDialog>

      <div
        className="w-5 h-5 self-end cursor-pointer"
        onClick={handlePromptConfirmation}
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
