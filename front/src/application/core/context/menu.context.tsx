import { createContext, useState, ReactNode } from "react";
import { localStorageService } from "../services/localStorageService";
import { UI } from "src/application/core/constants/CONSTANTS";
interface MenuContextProps {
  isCollapsed: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorageService.getItem<boolean>(UI.ISCOLAPSED_MENU);
    return savedState !== null ? savedState : false;
  });

  const toggleMenu = () => {
    setIsCollapsed((prev) => {
      const newState = !prev;
      localStorageService.setItem(UI.ISCOLAPSED_MENU, newState);
      return newState;
    });
  };

  return (
    <MenuContext.Provider value={{ isCollapsed, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
