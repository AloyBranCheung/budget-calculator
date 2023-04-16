import React from "react";
import TitleText from "../UI/typography/TitleText";

interface SpendableCategoryProps {
  isLoading: boolean;
  categoryName: string;
  categoryTotal: string;
  categoryRemaining: string;
  colorCode: string;
}

export default function SpendableCategory({
  colorCode,
  isLoading,
  categoryName,
  categoryTotal,
  categoryRemaining,
}: SpendableCategoryProps) {
  return (
    <div className="flex gap-5 justify-between items-center">
      <div className="flex flex-col w-full">
        <TitleText className="text-lg break-normal " title={categoryName} />
        <TitleText className="text-md break-normal " title={categoryTotal} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full">
          <TitleText
            className={`text-lg break-normal  w-max ${colorCode}`}
            title={categoryRemaining}
          />
        </div>
      )}
    </div>
  );
}
