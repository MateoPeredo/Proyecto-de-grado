import { Outlet } from "react-router-dom";
import { SideBar } from "../shared/private/sideBar";
import { MainHeader } from "../shared/private/mainHeder";
import { MenuProvider } from "../../application/core/context/menu.context";
import { Drawer } from "../shared/global/drawer";
import { DrawerProvider } from "../../application/core/context/drawer.context";

export const PrivateLayaut = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col overflow-hidden">
      <MenuProvider>
        <DrawerProvider>
          <Drawer />
          <MainHeader />
          <main className="flex  w-full h-full transition-all duration-300 shadow-md ">
            <SideBar />
            <section className="p-4 w-full">
              <Outlet />
            </section>
          </main>
        </DrawerProvider>
      </MenuProvider>
    </div>
  );
};
