import Link from "next/link";
import { Suspense } from "react";

import { PageHeader } from "@/features/common/components/page-header";
import { Spinner } from "@/features/common/components/spinner";
import { UnitsList } from "@/features/units/components/units-list";

export default function AdminUnitsPage() {
  return (
    <div>
      <PageHeader title="Units Management" />

      <Link
        href="/admin/units/create"
        className="mb-4 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      >
        Create New
      </Link>

      <Suspense fallback={<Spinner />}>
        <UnitsList />
      </Suspense>
    </div>
  );
}
