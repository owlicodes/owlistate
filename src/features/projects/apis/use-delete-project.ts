import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const deleteProject = (projectId: string): Promise<{ message: string }> => {
  return axios
    .delete(`/api/projects/${projectId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useDeleteProject = () => {
  return useMutation({
    mutationFn: deleteProject,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};
