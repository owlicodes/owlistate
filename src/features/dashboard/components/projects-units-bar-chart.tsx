"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TProject } from "@/types";

export const ProjectsUnitsBarChart = async ({
  projects,
}: {
  projects: Array<TProject>;
}) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>Project Units Overview</CardTitle>
        <CardDescription>Number of units per project</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            units: {
              label: "Units",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={projects}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="totalUnits"
                fill="var(--color-units)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
