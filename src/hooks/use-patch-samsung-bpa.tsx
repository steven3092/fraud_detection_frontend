import { useMutation } from "@tanstack/react-query";
import { fetchPatchSamsungBPA } from "../services/patch-samsung-bpa";
import { toast } from "react-toastify";

export const usePatchSamsungBPA = () => {
  const patchSamsungBPAMutation = useMutation({
    mutationFn: fetchPatchSamsungBPA,
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
    onError: (error) => console.log(error),
  });

  return {
    patchSamsungBPAMutation,
  };
};
