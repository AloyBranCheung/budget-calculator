import { toast } from "react-toastify";

export enum ToastMessageType {
  Error = "error",
  Success = "success",
}

const toastMessage = (messageType: ToastMessageType, message: string) => {
  switch (messageType) {
    case ToastMessageType.Success:
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      break;
    case ToastMessageType.Error:
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      break;
    default:
      console.log("default");

      toast.warn("Hmm, something's not right :|", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  }
};

export default toastMessage;
