import { Project, Unit } from "@prisma/client";

export type TProject = Project;
export type TCreateProject = Omit<
  Project,
  "id" | "userId" | "createdAt" | "updatedAt"
>;
export type TUpdateProject = TCreateProject;

export type TUnit = Unit;

export type TImage = {
  id: string;
  key: string;
  name: string;
};
