import { useContext } from "react";
import { SettingChartContext } from "../context/setting.chart.context";

export const useChart = () => {
  const context = useContext(SettingChartContext);
  if (!context) {
    throw new Error(
      "no se configuro de forma correcta la configuracion de graficas"
    );
  }
  return context;
};
