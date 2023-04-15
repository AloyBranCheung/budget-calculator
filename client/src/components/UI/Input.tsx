import React from "react";

interface InputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  handleError?: boolean;
  isError?: boolean;
  errorMessage?: string;
  step?: string;
}

export default function Input({
  type,
  value,
  onChange,
  placeholder,
  handleError,
  isError,
  errorMessage,
  step,
}: InputProps) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-gray-300 rounded-md p-1"
        step={step}
      />
      {handleError && isError && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
