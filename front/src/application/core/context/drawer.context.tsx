import { createContext, ReactNode, useState } from "react";
import {
  ButtonProps,
  DrawerProps,
  DrawerProviderProps,
  DrawerState,
} from "src/application/core/types/drawer.types";

export const DrawerContext = createContext<DrawerProps | undefined>(undefined);
export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [state, setState] = useState<DrawerState>({
    buttons: [],
    content: null,
    isVisible: false,
    title: "",
  });

  const toggle = () => {
    setState((prev) => ({
      ...prev,
      isVisible: !prev.isVisible,
    }));
  };
  const setContent = (content: ReactNode) => {
    setState((prev) => ({
      ...prev,
      content,
    }));
  };
  const setTitle = (title: string) => {
    setState((prev) => ({
      ...prev,
      title,
    }));
  };
  const setButtons = (buttons: ButtonProps[]) => {
    setState((prev) => ({
      ...prev,
      buttons,
    }));
  };

  return (
    <DrawerContext.Provider
      value={{
        state,
        toggle,
        setContent,
        setButtons,
        setTitle,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
