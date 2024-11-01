import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { TProject } from "@/types";

const getProjects = (): Promise<Array<TProject>> => {
  return axios
    .get("/api/projects")
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
};
