import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const deleteImage = (imageKey: string): Promise<{ message: string }> => {
  return axios
    .delete(`/api/images/${imageKey}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useDeleteImage = () => {
  return useMutation({
    mutationFn: deleteImage,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};
