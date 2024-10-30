import { Suspense } from "react";

import { PageHeader } from "@/features/common/components/page-header";
import { Spinner } from "@/features/common/components/spinner";
import { CreateNewButton } from "@/features/projects/components/create-new-button";
import { ProjectsList } from "@/features/projects/components/projects-list";

export default function AdminProjectsPage() {
  return (
    <div>
      <PageHeader title="Projects Management" />

      <CreateNewButton />

      <Suspense fallback={<Spinner />}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}
