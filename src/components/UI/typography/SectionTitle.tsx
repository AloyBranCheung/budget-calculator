import React from "react";

interface SectionTitleProps {
  title: string;
  bold?: boolean;
}

export default function SectionTitle({ title, bold }: SectionTitleProps) {
  return <h2 className="text-2xl">{bold ? <b>{title}</b> : title}</h2>;
}
