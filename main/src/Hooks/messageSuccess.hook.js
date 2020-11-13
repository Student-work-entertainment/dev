import { useCallback } from "react";
import { toast } from "react-toastify";

export const useMessageSuccess = () => {
  toast.configure();
  return useCallback((text) => {
    if (text) {
      toast.success(text, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);
};
