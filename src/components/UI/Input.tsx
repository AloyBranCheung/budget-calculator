import React from "react";

interface InputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "number";
  placeholder?: string;
}

export default function Input({
  type,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border-2 border-gray-300 rounded-md p-2"
    />
  );
}
