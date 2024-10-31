import Image from "next/image";

import { Check, HandCoins, Home, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { TProject } from "@/types";

type PublicProjectDetailsProps = {
  project: TProject;
};

export const PublicProjectDetails = ({
  project,
}: PublicProjectDetailsProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{project.name}</CardTitle>
          <CardDescription className="mt-2 flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            {project.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96">
              <Image
                src={`https://utfs.io/f/${project.imageKey}`}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:scale-105"
              />
            </div>

            <section>
              <h2 className="mb-2 text-xl font-semibold">Overview</h2>
              <p className="text-gray-600">{project.overview}</p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold">Key Locations</h2>
              <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {project.keyLocations.split(",").map((location, index) => (
                  <li key={index} className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    {location}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <HandCoins className="mr-2 h-5 w-5 text-primary" />
                <span className="font-semibold">
                  {formatCurrency(project.minPrice)} -{" "}
                  {formatCurrency(project.maxPrice)}
                </span>
              </div>
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5 text-primary" />
                <span className="font-semibold">
                  {project.totalUnits} Units
                </span>
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-semibold">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {project.amenities.split(",").map((amenity, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center"
                  >
                    <Check className="mr-1 h-3 w-3" />
                    {amenity}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
