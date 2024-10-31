import Image from "next/image";

import { MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { TProject } from "@/types";

type ProjectCardProps = {
  project: TProject;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md">
      <CardHeader className="p-0">
        <Image
          src={`https://utfs.io/f/${project.imageKey}`}
          alt={project.name}
          objectFit="cover"
          height={300}
          width={300}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2 text-lg">{project.name}</CardTitle>
        <div className="mb-2 text-sm text-gray-600">
          {formatCurrency(project.minPrice)} -{" "}
          {formatCurrency(project.maxPrice)}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="mr-1 h-4 w-4" />
          {project.location}
        </div>
      </CardContent>
    </Card>
  );
};
