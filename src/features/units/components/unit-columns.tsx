"use client";

import { useRouter } from "next/navigation";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteContent } from "@/features/common/components/delete-content";
import { useToast } from "@/hooks/use-toast";
import { formatCurrency } from "@/lib/utils";
import useDialogConfigStore from "@/stores/dialog-store";
import { TProject, TUnit } from "@/types";

/* eslint-disable react-hooks/rules-of-hooks */

export const columns: ColumnDef<TUnit & { project: TProject }>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "project.name",
    header: "Project",
  },
  {
    accessorKey: "minPrice",
    header: "Minimum Price",
    cell: ({ row }) => {
      const unit = row.original;
      const formatted = formatCurrency(unit.minPrice);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "maxPrice",
    header: "Maximum Price",
    cell: ({ row }) => {
      const unit = row.original;
      const formatted = formatCurrency(unit.maxPrice);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const project = row.original;
      const formatted = format(project.createdAt, "PPPP");

      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const unit = row.original;
      const { setDialogConfig } = useDialogConfigStore();
      const { toast } = useToast();
      const router = useRouter();

      const deleteCallback = () => {
        // deleteProject.mutate(unit.id, {
        //   onSuccess: (data) => {
        //     toast({
        //       title: "Delete Project",
        //       description: data.message,
        //     });
        //     router.refresh();
        //     setDialogConfig(undefined);
        //   },
        //   onError: (error) => {
        //     toast({
        //       title: "Delete Project",
        //       description: error.message,
        //       variant: "destructive",
        //     });
        //     setDialogConfig(undefined);
        //   },
        // });
      };

      const showEditProjectForm = () => {
        router.push(`/admin/units/edit/${unit.id}`);
      };

      const showDeleteUnitConfirmation = () => {
        setDialogConfig({
          open: true,
          title: "Delete Unit",
          description: unit.name,
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
              onClick={showEditProjectForm}
            >
              <div className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={showDeleteUnitConfirmation}
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
