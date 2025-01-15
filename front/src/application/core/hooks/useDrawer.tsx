import { useContext } from "react";
import { DrawerContext } from "../context/drawer.context";

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("No se realizo la configuracion adecuada de el Drawer");
  }
  return context;
};
