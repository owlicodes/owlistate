import { PublicProjectDetails } from "@/features/projects/components/public-project-details";
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

  return <PublicProjectDetails project={project} />;
}
