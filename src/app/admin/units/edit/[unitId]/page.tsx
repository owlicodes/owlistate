import { PageHeader } from "@/features/common/components/page-header";
import { UnitDetails } from "@/features/units/components/unit-details";

export default function EditProjectPage({
  params,
}: {
  params: { unitId: string };
}) {
  return (
    <div>
      <PageHeader title="Edit Unit" />

      <UnitDetails unitId={params.unitId} />
    </div>
  );
}
