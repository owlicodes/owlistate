"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

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
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/features/common/components/submit-button";
import { useToast } from "@/hooks/use-toast";
import useDialogConfigStore from "@/stores/dialog-store";
import { TProject } from "@/types";

import { useCreateProject } from "../apis/use-create-project";
import { useUpdateProject } from "../apis/use-update-project";

const formSchema = z
  .object({
    name: z.string().trim().min(1, {
      message: "Name is required.",
    }),
    location: z.string().trim().min(1, {
      message: "Location is required.",
    }),
    minPrice: z.coerce
      .number()
      .positive()
      .min(0.01, "Minimum price must be greater than 0.")
      .max(9999999.99, "Minimum price cannot exceed 9,999,999.99.")
      .transform((val) => parseFloat(val.toFixed(2))),
    maxPrice: z.coerce
      .number()
      .positive()
      .min(0.01, "Maximum price must be greater than 0.")
      .max(9999999.99, "Maximum price cannot exceed 9,999,999.99.")
      .transform((val) => parseFloat(val.toFixed(2))),
    imageKey: z.string().trim().min(1, {
      message: "Image key is required.",
    }),
  })
  .refine((data) => data.minPrice <= data.maxPrice, {
    message: "Minimum price cannot be greater than maximum price.",
    path: ["maxPrice"],
  });

export const ProjectForm = ({ data }: { data?: TProject }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data ? data.name : "",
      location: data ? data.location : "",
      minPrice: data ? data.minPrice : 0,
      maxPrice: data ? data.maxPrice : 0,
      imageKey: data?.imageKey ? data.imageKey : "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();
  const { setDialogConfig } = useDialogConfigStore();

  const onSuccessHandler = (title: string, description: string) => {
    toast({
      title,
      description,
    });

    router.refresh();
    form.reset();
    setDialogConfig(undefined);
  };

  const onErrorHandler = (title: string, description: string) => {
    toast({
      title,
      description,
      variant: "destructive",
    });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!data) {
      createProject.mutate(values, {
        onSuccess: (data) => {
          onSuccessHandler("Create Project", data.message);
        },
        onError: (error) => {
          onErrorHandler("Create Project", error.message);
        },
      });
    } else {
      updateProject.mutate(
        {
          projectId: data.id,
          data: values,
        },
        {
          onSuccess: (data) => {
            onSuccessHandler("Update Project", data.message);
          },
          onError: (error) => {
            onErrorHandler("Update Project", error.message);
          },
        }
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Textarea rows={3} className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-4">
          <FormField
            control={form.control}
            name="minPrice"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Minimum Price</FormLabel>
                <FormControl>
                  <Input autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxPrice"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Maximum Price</FormLabel>
                <FormControl>
                  <Input autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="imageKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Key</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton
          isPending={createProject.isPending || updateProject.isPending}
        />
        {form.getValues("imageKey") && (
          <div className="mx-auto max-w-2xl">
            <Image
              src={`https://utfs.io/f/${form.getValues("imageKey")}`}
              alt={form.getValues("name")}
              width={400}
              height={300}
              className="h-auto w-full object-cover"
            />
          </div>
        )}
      </form>
    </Form>
  );
};
