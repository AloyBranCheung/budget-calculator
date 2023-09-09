import TitleText from "./typography/TitleText";
import Button from "./Button";

interface ConfirmationProps {
  onClickNo: () => void;
  onClickYes: () => void;
  noLabel?: string;
  yesLabel?: string;
}

export default function Confirmation({
  onClickNo,
  onClickYes,
  noLabel,
  yesLabel,
}: ConfirmationProps) {
  return (
    <div className="flex flex-col">
      <TitleText title="Are you sure?" />
      <div className="flex justify-around">
        <Button label={noLabel ?? "No"} onClick={onClickNo} />
        <Button label={yesLabel ?? "Yes"} onClick={onClickYes} />
      </div>
    </div>
  );
}
