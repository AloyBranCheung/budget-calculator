import React from "react";
import PageTitle from "./UI/typography/PageTitle";
import Button from "./UI/Button";
// hooks
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { logout } = useAuth();
  return (
    <div className="flex justify-between items-center">
      <PageTitle title="SimplyBudgets" />
      <Button onClick={() => logout()} label={"Logout"} />
    </div>
  );
}
