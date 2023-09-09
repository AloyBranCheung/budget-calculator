import Button from "../Button";

interface FormSubmitProps {
  onClickCancel: () => void;
}

export default function FormSubmit({ onClickCancel }: FormSubmitProps) {
  return (
    <div className="flex gap-2">
      <Button label="Cancel" onClick={onClickCancel} />
      <Button label="Submit" type="submit" />
    </div>
  );
}
