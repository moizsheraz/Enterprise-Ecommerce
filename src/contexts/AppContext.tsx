import React, { useContext} from "react";
import { enqueueSnackbar } from 'notistack';


type ToastMessage = {
  message: string;
  type: "default" | "error" | "success" | "warning" | "info";
};
type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);


export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {


  return (
    <AppContext.Provider
      value={{
        showToast: ({message,type}:ToastMessage) => {
          enqueueSnackbar(message,{
            variant: type,
            autoHideDuration: 3000,
            preventDuplicate: true,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        },
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