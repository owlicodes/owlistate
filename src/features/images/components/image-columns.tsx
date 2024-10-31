"use client";

import { useRouter } from "next/navigation";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteContent } from "@/features/common/components/delete-content";
import { useToast } from "@/hooks/use-toast";
import useDialogConfigStore from "@/stores/dialog-store";
import { TImage } from "@/types";

import { useDeleteImage } from "../apis/use-delete-image";

/* eslint-disable react-hooks/rules-of-hooks */

export const columns: ColumnDef<TImage>[] = [
  {
    accessorKey: "key",
    header: "Image Key",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const image = row.original;
      const { setDialogConfig } = useDialogConfigStore();
      const { toast } = useToast();
      const router = useRouter();
      const deleteImage = useDeleteImage();

      const deleteCallback = () => {
        deleteImage.mutate(image.key, {
          onSuccess: (data) => {
            toast({
              title: "Delete Image",
              description: data.message,
            });
            router.refresh();
            setDialogConfig(undefined);
          },
          onError: (error) => {
            toast({
              title: "Delete Image",
              description: error.message,
              variant: "destructive",
            });
            setDialogConfig(undefined);
          },
        });
      };

      const showDeleteProjectConfirmation = () => {
        setDialogConfig({
          open: true,
          title: "Delete Image",
          description: image.name,
          content: <DeleteContent deleteCallback={deleteCallback} />,
        });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={showDeleteProjectConfirmation}
            >
              <div className="flex items-center gap-2 text-red-500">
                <Trash className="h-4 w-4" />
                <span>Delete</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
