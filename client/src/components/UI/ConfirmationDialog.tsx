import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onConfirm?: <T extends unknown[]>(...args: T) => void;
  children: React.ReactNode;
  onNo: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ConfirmationDialog({
  onConfirm,
  children,
  isOpen,
  onNo,
}: ConfirmationDialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    dialogRef?.current?.removeAttribute("open");

    if (isOpen) {
      dialogRef?.current?.showModal();
    } else {
      dialogRef?.current?.close();
    }
    return () => dialogRef?.current?.close();
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} open={isOpen}>
      <div className="flex flex-col gap-5">
        {children}
        <div className="flex gap-5 justify-end">
          <button
            onClick={() => {
              if (onNo) onNo();
              dialogRef.current?.close();
            }}
          >
            No
          </button>
          <Button
            label="Yes"
            onClick={() => {
              if (onConfirm) onConfirm();
              dialogRef.current?.close();
            }}
          />
        </div>
      </div>
    </dialog>
  );
}
