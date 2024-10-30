"use client";

import { Button } from "@/components/ui/button";
import useDialogConfigStore from "@/stores/dialog-store";

import { SignUpForm } from "./sign-up-form";

export const SignUpButton = () => {
  const { setDialogConfig } = useDialogConfigStore();

  const showSignUpForm = () =>
    setDialogConfig({
      open: true,
      title: "Hello There!",
      description:
        "By creating an account, you agree to share your information with us.",
      content: <SignUpForm />,
    });

  return <Button onClick={showSignUpForm}>Sign Up</Button>;
};
