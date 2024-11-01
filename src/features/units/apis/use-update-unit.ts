import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { TUpdateUnit } from "@/types";

const updateUnit = ({
  unitId,
  data,
}: {
  unitId: string;
  data: TUpdateUnit;
}): Promise<{ message: string }> => {
  return axios
    .patch(`/api/units/${unitId}`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useUpdateUnit = () => {
  return useMutation({
    mutationFn: updateUnit,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};
