import Image from "next/image";

import { Home, Ruler } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";

export const PublicUnitsList = async ({ projectId }: { projectId: string }) => {
  const units = await prisma.unit.findMany({
    where: {
      projectId,
    },
  });

  if (!units || units.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Model Units</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {units.map((unit) => (
          <Card key={unit.id} className="overflow-hidden">
            <Image
              src={`https://utfs.io/f/${unit.imageKey}`}
              alt={unit.name}
              width={400}
              height={300}
              className="h-48 w-full object-cover"
            />
            <CardHeader>
              <CardTitle>{unit.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {unit.specifications.split(",").map((spec, i) => (
                  <Badge key={i} variant="secondary">
                    {spec}
                  </Badge>
                ))}
              </div>
              <p className="mb-2 text-lg font-semibold">
                {formatCurrency(unit.minPrice)} -{" "}
                {formatCurrency(unit.maxPrice)}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Ruler className="mr-1 h-4 w-4" />
                  <span>Lot: {unit.lotArea} m²</span>
                </div>
                <div className="flex items-center">
                  <Home className="mr-1 h-4 w-4" />
                  <span>Floor: {unit.floorArea} m²</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
