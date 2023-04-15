import React from "react";

interface SectionTitleProps {
  title: string;
  bold?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  bold,
  className,
}: SectionTitleProps) {
  return (
    <h2 className={`text-2xl ${className}`}>{bold ? <b>{title}</b> : title}</h2>
  );
}
