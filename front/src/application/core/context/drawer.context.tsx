import { createContext, ReactNode, useState } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}
interface DrawerState {
  isVisible: boolean;
  content: ReactNode;
  title: string;
  buttons: ButtonProps[];
}
interface DrawerProps {
  state: DrawerState;
  toggle: () => void;
  setContent: (content: ReactNode) => void;
  setTitle: (title: string) => void;
  setButtons: (buttons: ButtonProps[]) => void;
}

interface DrawerProviderProps {
  children: ReactNode;
}
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
        setTitle
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
