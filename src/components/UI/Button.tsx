import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      data-te-ripple-init
      data-te-ripple-color="light"
      className="border-solid border-2 border-black rounded-2xl px-2 py-1 hover:bg-gray-200"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
