import { Project } from "@prisma/client";

export type TProject = Project;
export type TCreateProject = Omit<
  Project,
  "id" | "userId" | "createdAt" | "updatedAt"
>;
export type TUpdateProject = TCreateProject;
