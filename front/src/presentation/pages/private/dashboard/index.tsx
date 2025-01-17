import { ApexChartLine } from "../../../../application/modules/graphics/line-charts";
import { useDrawer } from "../../../../application/core/hooks/useDrawer";
import { ConfigurationDashboard } from "./configuration";
import { networkTrafficData } from "../../../../application/modules/graphics/mooks";

export const Dashboard = () => {
  const { toggle, setContent, setTitle } = useDrawer();
  const handleOpenConfig = () => {
    setTitle("Configuración de grafico");
    setContent(<ConfigurationDashboard chartId={1} />);
    toggle();
  };
  return (
    <div className=" w-full">
      <h1>Dashboard</h1>
      <ApexChartLine
        chartId={1}
        data={networkTrafficData}
        name="GB"
        titleY="Home"
      />
      <button onClick={handleOpenConfig}>configuraciones</button>
    </div>
  );
};
