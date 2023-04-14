import React from "react";
import TitleText from "../UI/typography/TitleText";

interface ExpendCategoryProps {
  title: string;
}

export default function ExpendCategory({ title }: ExpendCategoryProps) {
  return (
    <div>
      <TitleText title={title} />
    </div>
  );
}
