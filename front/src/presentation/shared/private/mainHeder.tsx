import { useMenu } from "../../../application/core/hooks/useMenu";
import {  ICON_SIDEBAR_CLOSE, ICON_SIDEBAR_OPEN, ICON_USER } from "../global/icons";
export const MainHeader = () => {
  const { toggleMenu ,isCollapsed} = useMenu();
  return (
    <header className="bg-[#EBECF4] h-16 flex justify-between items-center text-xl p-4 border-b  shadow-md col-span-2 row-start-1 z-50 relative">
      <button
        onClick={toggleMenu}
        className="p-2 bg-primary/10 text-primary rounded text-xl"
      >
        {isCollapsed? ICON_SIDEBAR_OPEN: ICON_SIDEBAR_CLOSE}
      </button>
      <button
        onClick={toggleMenu}
        className="p-2 bg-primary/10 text-primary rounded text-xl"
      >
        {ICON_USER}
      </button>
    </header>
  );
};
