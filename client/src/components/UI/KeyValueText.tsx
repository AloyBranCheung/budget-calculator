import React from "react";
import TitleText from "./typography/TitleText";

interface KeyValueTextProps {
  label: string;
  value: string;
  className?: string;
  textClassName?: string;
}

export default function KeyValueText({
  label,
  value,
  className,
  textClassName,
}: KeyValueTextProps) {
  return (
    <div className={`flex gap-1 items-center ${className}`}>
      <TitleText className={textClassName} title={label} />
      <TitleText className={textClassName} title={value} />
    </div>
  );
}
