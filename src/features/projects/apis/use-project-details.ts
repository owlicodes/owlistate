import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { TProject } from "@/types";

const getProject = (projectId: string): Promise<TProject> => {
  return axios
    .get(`/api/projects/${projectId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useProjectDetails = (projectId: string) => {
  return useQuery({
    queryKey: ["projects", projectId],
    queryFn: () => getProject(projectId),
  });
};
