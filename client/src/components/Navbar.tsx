import React, { useState } from "react";
import PageTitle from "./UI/typography/PageTitle";
import Button from "./UI/Button";
// hooks
import useAuth from "../hooks/useAuth";
import useMutationResetBudget from "../react-query/queryHooks/useMutationResetBudget";
import Confirmation from "./UI/Confirmation";

export default function Navbar() {
  const { logout } = useAuth();
  const { mutate: resetBudget } = useMutationResetBudget();
  const [isConfirmation, setIsConfirmation] = useState(false);

  const handleClickNo = () => setIsConfirmation(false);
  const handleClickYes = () => {
    resetBudget();
    setIsConfirmation(false);
  };

  return (
    <div className="flex justify-between items-center">
      <PageTitle title="SimplyBudgets" />
      <div className="flex items-center gap-2">
        {process.env.NODE_ENV === "prd" ? undefined : isConfirmation ? (
          <Confirmation onClickNo={handleClickNo} onClickYes={handleClickYes} />
        ) : (
          <Button onClick={() => setIsConfirmation(true)} label="Reset" />
        )}
        <Button onClick={() => logout()} label={"Logout"} />
      </div>
    </div>
  );
}
