import prisma from "@/lib/prisma";

import { UnitForm } from "./unit-form";

export const UnitDetails = async ({ unitId }: { unitId: string }) => {
  const projects = await prisma.project.findMany();
  const unit = await prisma.unit.findFirst({
    where: {
      id: unitId,
    },
  });

  if (!unit) {
    return (
      <div>
        <p>Unable to fetch unit details.</p>
      </div>
    );
  }

  return (
    <div>
      <UnitForm projects={projects} data={unit} />
    </div>
  );
};
