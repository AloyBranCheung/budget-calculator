import React from "react";

interface GutterContainerProps {
  children: React.ReactNode;
}

export default function GutterContainer({ children }: GutterContainerProps) {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-6xl h-full p-5">{children}</div>
    </div>
  );
}
