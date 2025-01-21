// import { ApexChartLine } from "../../../../application/modules/graphics/line-charts";
import { useDrawer } from "../../../../application/core/hooks/useDrawer";
import { ApexChartLine } from "../../../../application/modules/graphics/line-charts";
import { Tile } from "../../../shared/global/tiles";
import { Wrapper } from "../../../shared/global/wrapper";
import { ConfigurationDashboard } from "./configuration";
// import { networkTrafficData } from "../../../../application/modules/graphics/mooks";

export const Dashboard = () => {
  const { toggle, setContent, setTitle } = useDrawer();
  const handleOpenConfig = () => {
    setTitle("Configuración de grafico");
    setContent(<ConfigurationDashboard chartId={1} />);
    toggle();
  };
  const mookTile = [
    { id: 1, digit: 1, increase: 15, name: "Events over time" },
    { id: 2, digit: 250, increase: 20, name: "Active Users" },
    { id: 3, digit: 1000, increase: 10, name: "Page Views" },
    { id: 4, digit: 50, increase: 5, name: "Conversions" },
  ];

  return (
    <Wrapper title="Dashborad">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mookTile.map((tile) => (
          <Tile
            id={tile.id}
            digit={tile.digit}
            increase={tile.increase}
            key={tile.id}
            name={tile.name}
          />
        ))}
      </div>
      <ApexChartLine />
      <button onClick={handleOpenConfig}>configuraciones</button>
    </Wrapper>
  );
};
