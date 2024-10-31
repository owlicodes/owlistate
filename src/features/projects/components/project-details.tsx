"use client";

import { useParams } from "next/navigation";

import { Spinner } from "@/features/common/components/spinner";

import { useProjectDetails } from "../apis/use-project-details";
import { ProjectForm } from "./project-form";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = useProjectDetails(projectId as string);

  if (project.isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!project.data) {
    return (
      <div>
        <p>Unable to fetch project details.</p>
      </div>
    );
  }

  return <ProjectForm data={project.data} />;
};
