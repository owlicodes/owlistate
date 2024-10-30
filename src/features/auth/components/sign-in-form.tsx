"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/features/common/components/submit-button";
import { useToast } from "@/hooks/use-toast";
import { client } from "@/lib/client";
import useDialogConfigStore from "@/stores/dialog-store";

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Invalid email.",
    }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const SignInForm = () => {
  const [isPending, setIsPending] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();
  const { setDialogConfig } = useDialogConfigStore();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await client.signIn.email(
      {
        ...values,
      },
      {
        onRequest: () => {
          setIsPending(true);
        },
        onSuccess: () => {
          setIsPending(false);
          setDialogConfig(undefined);
          router.refresh();
        },
        onError: (ctx) => {
          setIsPending(false);
          toast({
            title: "Sign In",
            description: ctx.error.message,
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isPending={isPending} />
      </form>
    </Form>
  );
};
