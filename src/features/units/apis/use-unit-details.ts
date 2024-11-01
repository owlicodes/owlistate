import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { TUnit } from "@/types";

const getUnitDetails = (unitId: string): Promise<TUnit> => {
  return axios
    .get(`/api/units/${unitId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useUnitDetails = (unitId: string) => {
  return useQuery({
    queryKey: ["units", unitId],
    queryFn: () => getUnitDetails(unitId),
  });
};
