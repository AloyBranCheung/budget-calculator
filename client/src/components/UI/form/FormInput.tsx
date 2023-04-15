import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import Input from "../Input";

interface FormInputProps<FV extends FieldValues> {
  control: Control<FV>;
  name: Path<FV>;
  inputType: React.HTMLInputTypeAttribute;
  inputPlaceholder: string;
  isError: boolean;
  errorMessage: string;
  min?: number;
  className?: string;
  label?: boolean;
  labelText?: string;
}

export default function FormInput<FV extends FieldValues>({
  className,
  control,
  name,
  inputType,
  inputPlaceholder,
  isError,
  errorMessage,
  min,
  label,
  labelText,
}: FormInputProps<FV>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div>
          {label && <div>{labelText}</div>}
          <Input
            className={className}
            placeholder={inputPlaceholder}
            onChange={onChange}
            value={value}
            type={inputType}
            handleError
            isError={isError}
            errorMessage={errorMessage}
            min={min}
          />
        </div>
      )}
    />
  );
}
