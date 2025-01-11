import { Outlet } from "react-router-dom";
import { SideBar } from "../shared/sideBar";
import { MainHeader } from "../shared/private/mainHeder";
import { MenuProvider } from "../../application/core/context/menu.context";

export const PrivateLayaut = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col">
      <MenuProvider>
        <MainHeader />
        <main className="bg-secondary flex  w-full h-full">
          <SideBar /> <Outlet />
        </main>
      </MenuProvider>
    </div>
  );
};
