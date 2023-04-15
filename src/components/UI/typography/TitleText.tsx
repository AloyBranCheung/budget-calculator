import React from "react";

interface TitleTextProps {
  title: string | number;
  bold?: boolean;
  className?: string;
}

export default function TitleText({ title, className, bold }: TitleTextProps) {
  return (
    <h3 className={`text-xl ${className}`}>{bold ? <b>{title}</b> : title}</h3>
  );
}
