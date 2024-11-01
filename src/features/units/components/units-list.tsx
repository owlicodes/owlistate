import { DataTable } from "@/features/common/components/data-table";
import prisma from "@/lib/prisma";

import { columns } from "./unit-columns";

export const UnitsList = async () => {
  const units = await prisma.unit.findMany();

  return <DataTable columns={columns} data={units} />;
};
