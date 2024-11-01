import { Suspense } from "react";

import { Spinner } from "@/features/common/components/spinner";
import { PublicProjectDetails } from "@/features/projects/components/public-project-details";
import { PublicUnitsList } from "@/features/units/components/public-units-list";
import prisma from "@/lib/prisma";

export default async function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = await prisma.project.findFirst({
    where: {
      id: params.projectId,
    },
  });

  if (!project) {
    return (
      <div>
        <p>
          Unable to display project details as of the moment. Please reload the
          page after a few minutes.
        </p>
      </div>
    );
  }

  return (
    <div>
      <PublicProjectDetails project={project} />

      <Suspense fallback={<Spinner />}>
        <PublicUnitsList projectId={params.projectId} />
      </Suspense>
    </div>
  );
}
