import { PageHeader } from "@/features/common/components/page-header";
import { UnitForm } from "@/features/units/components/unit-form";

export default function CreateUnitPage() {
  return (
    <div>
      <PageHeader title="Create New Unit" />

      <UnitForm />
    </div>
  );
}
