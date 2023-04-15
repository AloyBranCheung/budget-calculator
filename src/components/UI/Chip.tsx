import React from "react";

interface ChipProps {
  label: string;
  color?: string;
  backgroundColor?: string;
}

export default function Chip({ label, color, backgroundColor }: ChipProps) {
  return (
    <div
      className="border-2 border-solid rounded-2xl border-black px-2"
      style={{ color, backgroundColor: backgroundColor }}
    >
      {label}
    </div>
  );
}
