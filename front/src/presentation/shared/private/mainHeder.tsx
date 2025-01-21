import { useMenu } from "../../../application/core/hooks/useMenu";
import { ICON_MENU } from "../global/icons";
export const MainHeader = () => {
  const { toggleMenu } = useMenu();
  return (
    <header className="bg-white h-16 flex justify-start items-center text-xl p-2 border shadow-md col-span-2 row-start-1">
    
      <button
        onClick={toggleMenu}
        className="p-2 text-white bg-primary rounded"
      >
        {ICON_MENU}
      </button>
    </header>
  );
};
