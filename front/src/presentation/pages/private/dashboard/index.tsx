// import { ApexChartLine } from "../../../../application/modules/graphics/line-charts";
import { useDrawer } from "../../../../application/core/hooks/useDrawer";
import { ApexChartLine } from "../../../../application/modules/graphics/line-charts";
import { Tile } from "../../../shared/global/tiles";
import { Wrapper } from "../../../shared/global/wrapper";
import { ConfigurationDashboard } from "./configuration";
import { SectionChart } from "./sections/charts.sections";
import { SectionTile } from "./sections/tile.sections";
// import { networkTrafficData } from "../../../../application/modules/graphics/mooks";

export const Dashboard = () => {
  const { toggle, setContent, setTitle } = useDrawer();
  const handleOpenConfig = () => {
    setTitle("Configuración de grafico");
    setContent(<ConfigurationDashboard chartId={1} />);
    toggle();
  };

  return (
    <Wrapper title="Dashborad">
      <SectionTile />
      <SectionChart />

      <button onClick={handleOpenConfig}>configuraciones</button>
    </Wrapper>
  );
};
