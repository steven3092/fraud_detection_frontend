import { useMutation } from "@tanstack/react-query";
import { fetchPostData } from "../utils/service";
import { toast, ToastOptions } from "react-toastify";

const TOAST_OPTIONS: ToastOptions<unknown> = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const usePostMutation = () => {
  const postMutation = useMutation({
    mutationFn: fetchPostData,
    onSuccess: (data) => {
      if (!data.fraud) {
        toast.success("SUCCESS", TOAST_OPTIONS);
        return;
      }
      toast.warn(data, TOAST_OPTIONS);
    },
    onError: () => console.log("Error"),
  });

  return {
    postMutation,
  };
};
