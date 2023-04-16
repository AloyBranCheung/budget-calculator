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
  className?: string;
  min?: number;
}

export default function Input({
  className,
  type,
  value,
  onChange,
  placeholder,
  handleError,
  isError,
  errorMessage,
  step,
  min,
}: InputProps) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border-2 border-gray-300 rounded-md p-1 ${className}`}
        step={step}
        min={min}
      />
      {handleError && isError && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
