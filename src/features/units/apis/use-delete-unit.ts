import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const deleteUnit = (unitId: string): Promise<{ message: string }> => {
  return axios
    .delete(`/api/units/${unitId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useDeleteUnit = () => {
  return useMutation({
    mutationFn: deleteUnit,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};
