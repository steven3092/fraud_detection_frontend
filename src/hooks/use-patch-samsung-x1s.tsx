import { useMutation } from "@tanstack/react-query";
import { fetchPatchSamsungX1S } from "../services/patch-samsung-x1s";
import { toast } from "react-toastify";

export const usePatchSamsungX1S = () => {
  const patchSamsungX1SMutation = useMutation({
    mutationFn: fetchPatchSamsungX1S,
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
    onError: (error) => console.error(error),
  });

  return {
    patchSamsungX1SMutation,
  };
};
