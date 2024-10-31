import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { TUpdateProject } from "@/types";

const updateProject = ({
  projectId,
  data,
}: {
  projectId: string;
  data: TUpdateProject;
}): Promise<{ message: string }> => {
  return axios
    .patch(`/api/projects/${projectId}`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useUpdateProject = () => {
  return useMutation({
    mutationFn: updateProject,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};
