import { createContext, ReactNode, useState } from "react";
interface DrawerProps {
  isVisible: boolean;
  toggle: () => void;
}
interface DrawerProviderProps {
  children: ReactNode;
}
export const DrawerContext = createContext<DrawerProps | undefined>(undefined);
export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible)
  };
  return (
    <DrawerContext.Provider value={{ isVisible, toggle }}>
      {children}
    </DrawerContext.Provider>
  );
};
