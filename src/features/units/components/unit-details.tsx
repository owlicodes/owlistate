"use client";

import { useParams } from "next/navigation";

import { Spinner } from "@/features/common/components/spinner";

import { useUnitDetails } from "../apis/use-unit-details";
import { UnitForm } from "./unit-form";

export const UnitDetails = () => {
  const { unitId } = useParams();
  const unit = useUnitDetails(unitId as string);

  if (unit.isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!unit.data) {
    return (
      <div>
        <p>Unable to fetch unit details.</p>
      </div>
    );
  }

  return (
    <div>
      <UnitForm projects={[]} data={unit.data} />
    </div>
  );
};
