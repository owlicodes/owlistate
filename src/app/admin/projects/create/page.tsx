import { PageHeader } from "@/features/common/components/page-header";
import { ProjectForm } from "@/features/projects/components/project-form";

export default function CreateProjectPage() {
  return (
    <div>
      <PageHeader title="Create New Project" />

      <ProjectForm />
    </div>
  );
}
