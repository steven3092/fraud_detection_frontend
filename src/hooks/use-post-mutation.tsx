import { useMutation } from "@tanstack/react-query";
import { toast, ToastOptions } from "react-toastify";
import { fetchPostData } from "../services/post-sensor";

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
      const isFraud = data.data.fraud === "True";
      if (data.status === "ERROR") {
        toast.error(data.data, TOAST_OPTIONS);
      } else if (isFraud) {
        toast.warn(data.fraud_reason, TOAST_OPTIONS);
      } else {
        toast.success(data.status, TOAST_OPTIONS);
      }
    },
    onError: () => console.log("Error"),
  });

  return {
    postMutation,
  };
};
