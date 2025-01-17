import { Outlet } from "react-router-dom";
import { SideBar } from "../shared/private/sideBar";
import { MainHeader } from "../shared/private/mainHeder";
import { MenuProvider } from "../../application/core/context/menu.context";
import { Drawer } from "../shared/global/drawer";
import { DrawerProvider } from "../../application/core/context/drawer.context";
import { SettingChartProvider } from "../../application/core/context/setting.chart.context";

export const PrivateLayaut = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-hidden">
      <MenuProvider>
        <SettingChartProvider>
          <DrawerProvider>
            <Drawer />
            <MainHeader />
            <SideBar />
            <main className={`col-start-2 row-start-2 p-4 overflow-y-auto`}>
              <Outlet />
            </main>
          </DrawerProvider>
        </SettingChartProvider>
      </MenuProvider>
    </div>
  );
};
