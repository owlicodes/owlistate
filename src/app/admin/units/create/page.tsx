import { PageHeader } from "@/features/common/components/page-header";
import { UnitForm } from "@/features/units/components/unit-form";
import prisma from "@/lib/prisma";

export default async function CreateUnitPage() {
  const projects = await prisma.project.findMany();

  return (
    <div>
      <PageHeader title="Create New Unit" />

      <UnitForm projects={projects} />
    </div>
  );
}
