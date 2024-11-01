import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { TCreateUnit } from "@/types";

const createUnit = (data: TCreateUnit): Promise<{ message: string }> => {
  return axios
    .post("/api/units", data)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useCreateUnit = () => {
  return useMutation({
    mutationFn: createUnit,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};
