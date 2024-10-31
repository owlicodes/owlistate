import { PageHeader } from "@/features/common/components/page-header";
import { PublicProjectsList } from "@/features/projects/components/public-projects-list";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader title="Projects" />

      <PublicProjectsList />
    </div>
  );
}
