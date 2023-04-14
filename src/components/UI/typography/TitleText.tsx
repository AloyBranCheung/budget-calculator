import React from "react";

interface TitleTextProps {
  title: string;
}

export default function TitleText({ title }: TitleTextProps) {
  return <h3 className="text-xl">{title}</h3>;
}
