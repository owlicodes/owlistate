"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/features/common/components/submit-button";
import { useToast } from "@/hooks/use-toast";
import useDialogConfigStore from "@/stores/dialog-store";
import { TProject, TUnit } from "@/types";

import { useCreateUnit } from "../apis/use-create-unit";
import { useUpdateUnit } from "../apis/use-update-unit";

const formSchema = z
  .object({
    name: z.string().trim().min(1, {
      message: "Name is required.",
    }),
    projectId: z.string().min(1, {
      message: "Project is required.",
    }),
    specifications: z.string().trim().min(1, {
      message: "Specifications is required.",
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
      .min(0.01, "Minimum price must be greater than 0.")
      .max(9999999.99, "Maximum price cannot exceed 9,999,999.99.")
      .transform((val) => parseFloat(val.toFixed(2))),
    lotArea: z.coerce.number().transform((val) => parseFloat(val.toFixed(2))),
    floorArea: z.coerce
      .number()
      .positive()
      .min(1, "Minimum total floor area must be greater than 0.")
      .transform((val) => parseFloat(val.toFixed(2))),
    imageKey: z.string().trim().min(1, {
      message: "Image key is required.",
    }),
  })
  .refine((data) => data.minPrice <= data.maxPrice, {
    message: "Minimum price cannot be greater than maximum price.",
    path: ["maxPrice"],
  });

type UnitFormProps = {
  data?: TUnit;
  projects: Array<TProject>;
};

export const UnitForm = ({ data, projects }: UnitFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data ? data.name : "",
      projectId: data ? data.projectId : "",
      specifications: data ? data.specifications : "",
      minPrice: data ? data.minPrice : 0,
      maxPrice: data ? data.maxPrice : 0,
      lotArea: data?.lotArea ? data.lotArea : 0,
      floorArea: data?.floorArea ? data.floorArea : 0,
      imageKey: data?.imageKey ? data.imageKey : "",
    },
  });
  const { toast } = useToast();
  const router = useRouter();
  const { setDialogConfig } = useDialogConfigStore();
  const createUnit = useCreateUnit();
  const updateUnit = useUpdateUnit(data?.id);

  const onSuccessHandler = (title: string, description: string) => {
    toast({
      title,
      description,
    });

    if (!data) {
      form.reset();
    }

    router.refresh();
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
      createUnit.mutate(values, {
        onSuccess: (data) => {
          onSuccessHandler("Create Unit", data.message);
        },
        onError: (error) => {
          onErrorHandler("Create Unit", error.message);
        },
      });
    } else {
      updateUnit.mutate(
        {
          unitId: data.id,
          data: values,
        },
        {
          onSuccess: (data) => {
            onSuccessHandler("Update Unit", data.message);
          },
          onError: (error) => {
            onErrorHandler("Update Unit", error.message);
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
          name="projectId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Project" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="specifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specifications</FormLabel>
              <FormControl>
                <Textarea rows={5} className="resize-none" {...field} />
              </FormControl>
              <FormDescription>
                Each specification should be comma separated. Example: Living
                Area, Dining Area
              </FormDescription>
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
        <div className="flex items-center gap-4">
          <FormField
            control={form.control}
            name="lotArea"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Lot Area</FormLabel>
                <FormControl>
                  <Input autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="floorArea"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Floor Area</FormLabel>
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
          isPending={createUnit.isPending || updateUnit.isPending}
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
