import { DataTable } from "@/features/common/components/data-table";
import prisma from "@/lib/prisma";

import { columns } from "./project-columns";

export const ProjectsList = async () => {
  const projects = await prisma.project.findMany();

  return <DataTable columns={columns} data={projects} />;
};
