import React from "react";
import PageTitle from "./UI/typography/PageTitle";
import Button from "./UI/Button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <PageTitle title="SimplyBudgets" />
      <Button onClick={() => console.log("clicked")} label={"Logout"} />
    </div>
  );
}
