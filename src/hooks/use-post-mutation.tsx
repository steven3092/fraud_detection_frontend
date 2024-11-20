import { useMutation } from "@tanstack/react-query";
import { fetchPostData } from "../services/utils";
import { toast } from "react-toastify";

export const usePostMutation = () => {
  const postMutation = useMutation({
    mutationFn: fetchPostData,
    onSuccess: (data) => {
      if (typeof data !== "string") {
        toast.success("SUCCESS", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      toast.warn(data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
    onError: () => console.log("Error"),
  });

  return {
    postMutation,
  };
};