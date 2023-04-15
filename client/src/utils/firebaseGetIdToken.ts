import auth from "./firebaseAppAuth";
import toastMessage, { ToastMessageType } from "./toastMessages";

const getFirebaseIdtoken = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      return token;
    } else {
      console.error("User not logged in");
      toastMessage(ToastMessageType.Error, "User not logged in");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      toastMessage(ToastMessageType.Error, error.message);
    }
    console.error("Error retrieving Firebase ID token");
  }
};

export default getFirebaseIdtoken;
