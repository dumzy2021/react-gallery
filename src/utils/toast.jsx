import { toast } from "react-toastify";

export const toastHandler = ({
  message,
  type = "success" | "error" | "warning" | "info",
  position = "top-right",
}) => {
  const options = {
    position: position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast-message",
  };
  toast.dismiss();

  if (message && type) {
    toast?.[type](message, options);
  }
};
