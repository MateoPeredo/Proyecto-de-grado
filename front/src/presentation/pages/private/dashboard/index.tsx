import { ApexOptions } from "apexcharts";
import { ApexChartLine } from "../../../../application/modules/graphics/line-charts";
import { useDrawer } from "../../../../application/core/hooks/useDrawer";
import { ConfigurationDashboard } from "./configuration";

export const Dashboard = () => {
  const configuraciones: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: ["straight", "monotoneCubic"],
      colors: ["#E30613"],
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#E30613"],
        opacity: 0.1,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  const { toggle, setContent, setTitle } = useDrawer();
  const handleOpenConfig = () => {
    setTitle("Configuración de grafico");
    setContent(<ConfigurationDashboard />);
    toggle();
  };
  return (
    <div className=" w-full">
      <h1>Dashboard</h1>
      <ApexChartLine series={series} options={configuraciones} />
      <button onClick={handleOpenConfig}>configuraciones</button>
    </div>
  );
};
