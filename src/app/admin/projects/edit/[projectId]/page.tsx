import { PageHeader } from "@/features/common/components/page-header";
import { ProjectDetails } from "@/features/projects/components/project-details";

export default function EditProjectPage() {
  return (
    <div>
      <PageHeader title="Edit Project" />

      <ProjectDetails />
    </div>
  );
}
