import prisma from "@/lib/prisma";

import { ProjectCard } from "./project-card";

export const PublicProjectsList = async () => {
  const projects = await prisma.project.findMany();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
