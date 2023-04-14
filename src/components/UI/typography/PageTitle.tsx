import React from "react";

interface PageTitleProps {
  title: string;
  bold?: boolean;
}

export default function PageTitle({ title, bold }: PageTitleProps) {
  return <h1 className="text-3xl">{bold ? <b>{title}</b> : title}</h1>;
}
