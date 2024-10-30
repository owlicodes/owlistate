"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import useDialogConfigStore from "@/stores/dialog-store";

import { ProjectForm } from "./project-form";

export const CreateNewButton = () => {
  const { setDialogConfig } = useDialogConfigStore();

  const showProjectForm = () =>
    setDialogConfig({
      open: true,
      title: "Create New Project",
      description: "",
      content: <ProjectForm />,
    });

  return (
    <Button className="mb-4" onClick={showProjectForm}>
      <Plus /> Create New
    </Button>
  );
};
