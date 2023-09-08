import TitleText from "./typography/TitleText";
import Button from "./Button";

interface ConfirmationProps {
  onClickNo: () => void;
  onClickYes: () => void;
}

export default function Confirmation({
  onClickNo,
  onClickYes,
}: ConfirmationProps) {
  return (
    <div className="flex flex-col">
      <TitleText title="Are you sure?" />
      <div className="flex justify-around">
        <Button label="No" onClick={onClickNo} />
        <Button label="Yes" onClick={onClickYes} />
      </div>
    </div>
  );
}
