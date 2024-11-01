import { PageHeader } from "@/features/common/components/page-header";
import { ProjectsUnitsBarChart } from "@/features/dashboard/components/projects-units-bar-chart";
import SummaryCards from "@/features/dashboard/components/summary-cards";
import prisma from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const projects = await prisma.project.findMany();

  return (
    <div>
      <PageHeader title="Dashboard" />

      <div className="space-y-4">
        <SummaryCards />
        <ProjectsUnitsBarChart projects={projects} />
      </div>
    </div>
  );
}
