import React, { useContext, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useQuery } from "react-query";
import { validateToken } from "../api-client";

type ToastMessage = {
  message: string;
  type: "default" | "error" | "success" | "warning" | "info";
};

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const { isError } = useQuery("validateToken", validateToken, {
    retry: false,
    onSuccess: () => {
      isLoggedIn:!isError
      setLoggedIn(true);
    },
    onError: () => {
      setLoggedIn(false);
    },
  });

  return (
    <AppContext.Provider
      value={{
        showToast: ({ message, type }: ToastMessage) => {
          enqueueSnackbar(message, {
            variant: type,
            autoHideDuration: 3000,
            preventDuplicate: true,
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
        },
        isLoggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
