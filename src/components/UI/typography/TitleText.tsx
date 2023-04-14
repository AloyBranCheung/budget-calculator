import React from "react";

interface TitleTextProps {
  title: string;
  className?: string;
}

export default function TitleText({ title, className }: TitleTextProps) {
  return <h3 className={`text-xl ${className}`}>{title}</h3>;
}
