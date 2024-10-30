"use client";

import { Button } from "@/components/ui/button";
import useDialogConfigStore from "@/stores/dialog-store";

import { SignInForm } from "./sign-in-form";

export const SignInButton = () => {
  const { setDialogConfig } = useDialogConfigStore();

  const showSignInForm = () =>
    setDialogConfig({
      open: true,
      title: "Welcome Back!",
      description:
        "Please enter your credentials so you can sign back in to your account.",
      content: <SignInForm />,
    });

  return (
    <Button variant="outline" onClick={showSignInForm}>
      Sign In
    </Button>
  );
};
