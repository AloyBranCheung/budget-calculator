import { useState, useEffect } from "react";
import { queryClient } from "../main";
import auth from "../utils/firebaseAppAuth";
import {
  signInWithEmailAndPassword,
  User,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import toastMessage, { ToastMessageType } from "../utils/toastMessages";

export default function useAuth() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>();

  const startAsyncCall = () => {
    setIsError(false);
    setIsLoading(true);
  };

  const endAsyncCall = (error: boolean) => {
    if (error) {
      setIsLoading(false);
      setIsError(true);
    } else {
      setIsLoading(false);
      setIsError(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      startAsyncCall();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      endAsyncCall(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toastMessage(ToastMessageType.Error, error.message);
      } else {
        console.error("Something went wrong");
      }

      endAsyncCall(true);
    }
  };

  const logout = async () => {
    try {
      startAsyncCall();
      await signOut(auth);
      await queryClient.clear();
      endAsyncCall(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toastMessage(ToastMessageType.Error, error.message);
      } else {
        console.error("Something went wrong");
      }
      endAsyncCall(true);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        startAsyncCall();
        await onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        });
        endAsyncCall(false);
      } catch (error) {
        setIsLoggedIn(false);
        if (error instanceof Error) {
          console.error(error.message);
          toastMessage(ToastMessageType.Error, error.message);
        } else {
          console.error("Something went wrong");
        }
        endAsyncCall(true);
      }
    })();
  }, []);

  return { isLoading, isError, isLoggedIn, login, logout, user };
}
