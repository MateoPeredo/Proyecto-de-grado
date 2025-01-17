import { useMenu } from "../../../application/core/hooks/useMenu";
import { ICON_MENU } from "../global/icons";
import logo from "src/assets/logo.png";
export const MainHeader = () => {
  const { toggleMenu } = useMenu();
  return (
    <header className="bg-white h-16 flex justify-start items-center text-xl p-2 border shadow-md">
      <div className="w-[220px] flex justify-center items-center">
        <img src={logo} alt="Logo" />
        <span className="text-base">Conseso</span>
      </div>
      <button
        onClick={toggleMenu}
        className="p-2 text-white bg-primary rounded"
      >
        {ICON_MENU}
      </button>
    </header>
  );
};
