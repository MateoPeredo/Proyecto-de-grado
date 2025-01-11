import { useMenu } from "../../../application/core/hooks/useMenu";
import { ICON_MENU } from "../global/icons";

export const MainHeader = () => {
  const { toggleMenu } = useMenu();
  return (
    <header className="bg-gray-900 text-white h-12 flex justify-start items-center text-xl p-2">
      <span className="w-[240px] flex justify-center items-center">Logo</span>
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:bg-gray-700 rounded"
      >
        {ICON_MENU}
      </button>
    </header>
  );
};
