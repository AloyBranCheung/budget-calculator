import React from "react";
import PageTitle from "../UI/typography/PageTitle";
import CopyIcon from "../UI/CopyIcon";
import { ToastContainer } from "react-toastify";
// react-hook-form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../UI/form/FormInput";
// auth
import useAuth from "../../hooks/useAuth";
import Button from "../UI/Button";
// utils
import { z } from "zod";
import loginValidationSchema from "../../validators/loginValidationSchema";

const defaultValues: z.infer<typeof loginValidationSchema> = {
  email: "",
  password: "",
};

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
    defaultValues,
  });
  const { login, isLoading } = useAuth();

  const submitData = (data: z.infer<typeof loginValidationSchema>) => {
    login(data.email, data.password); // this is a function that will set the user to be logged in
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-solid border-black p-5 flex items-center justify-center flex-col gap-3">
        <PageTitle title="SimplyBudgets" />
        <div>Login </div>
        <form
          onSubmit={handleSubmit(submitData)}
          className="flex flex-col gap-5"
        >
          <FormInput
            control={control}
            name="email"
            inputType="email"
            inputPlaceholder="Email"
            isError={"email" in errors}
            errorMessage={errors.email?.message ? errors.email.message : ""}
          />
          <FormInput
            control={control}
            name="password"
            inputType="password"
            inputPlaceholder="Password"
            isError={"password" in errors}
            errorMessage={
              errors.password?.message ? errors.password?.message : ""
            }
          />
          {isLoading ? (
            <div className="flex items-center justify-center w-full">
              Loading...
            </div>
          ) : (
            <Button type="submit" label="Login" />
          )}
        </form>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p>Don't have an account? No worries use the demo account.</p>
          <div className="border-2 border-solid border-black rounded-xl p-1">
            <CopyIcon label="user: demo@demo.com" value="demo@demo.com" />
            <CopyIcon
              label="pass: WJUxV1dzdTjnG8p4tKqU"
              value="WJUxV1dzdTjnG8p4tKqU"
            />
          </div>
          <p>Want a personal one? Message me on Github.</p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
