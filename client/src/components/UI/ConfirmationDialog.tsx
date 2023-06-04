import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onConfirm?: <T extends unknown[]>(...args: T) => void;
  children: React.ReactNode;
}

export default function ConfirmationDialog({
  onConfirm,
  children,
}: ConfirmationDialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [isConfirm, setIsConfirm] = useState(false);
  const handleNo = () => {
    setIsConfirm(false);
    dialogRef?.current?.close();
  };

  return (
    <dialog ref={dialogRef} open={isConfirm}>
      <div className="flex flex-col gap-5">
        {children}
        <div className="flex gap-5 justify-end">
          <button onClick={handleNo}>No</button>
          <Button
            label="Yes"
            onClick={() => {
              if (onConfirm) onConfirm();
              dialogRef?.current?.close();
            }}
          />
        </div>
      </div>
    </dialog>
  );
}
