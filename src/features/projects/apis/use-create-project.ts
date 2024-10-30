import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { TCreateProject } from "@/types";

const createProject = (data: TCreateProject): Promise<{ message: string }> => {
  return axios
    .post("/api/projects", data)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useCreateProject = () => {
  return useMutation({
    mutationFn: createProject,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};
