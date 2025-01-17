import { ApexOptions } from "apexcharts";
import { ApexChartLine } from "../../../../application/modules/graphics/line-charts";
import { useDrawer } from "../../../../application/core/hooks/useDrawer";
import { ConfigurationDashboard } from "./configuration";
type DataPoint = { x: number; y: number };

export const data1: DataPoint[] = [
  { x: new Date("2023-01-01").getTime(), y: 30 },
  { x: new Date("2023-02-01").getTime(), y: 40 },
  { x: new Date("2023-03-01").getTime(), y: 35 },
  { x: new Date("2023-04-01").getTime(), y: 50 },
  { x: new Date("2023-05-01").getTime(), y: 49 },
  { x: new Date("2023-06-01").getTime(), y: 60 },
  { x: new Date("2023-07-01").getTime(), y: 70 },
  { x: new Date("2023-08-01").getTime(), y: 91 },
];

export const data2: DataPoint[] = [
  { x: new Date("2023-01-01").getTime(), y: 20 },
  { x: new Date("2023-02-01").getTime(), y: 30 },
  { x: new Date("2023-03-01").getTime(), y: 25 },
  { x: new Date("2023-04-01").getTime(), y: 40 },
  { x: new Date("2023-05-01").getTime(), y: 39 },
  { x: new Date("2023-06-01").getTime(), y: 50 },
  { x: new Date("2023-07-01").getTime(), y: 60 },
  { x: new Date("2023-08-01").getTime(), y: 80 },
];

export const Dashboard = () => {
  const configuraciones: ApexOptions = {
    chart: {
      id: "chart2",
      type: "line",
      height: 230,
      dropShadow: {
        enabled: true,
        enabledOnSeries: [1],
      },
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ["#008FFB", "#00E396"],
    stroke: {
      width: [2, 6],
      curve: ["straight", "monotoneCubic"],
    },
    fill: {
      opacity: [1, 0.75],
    },
    markers: {
      size: 0,
    },
    yaxis: [
      {
        seriesName: "Flies",
        axisTicks: {
          show: true,
          color: "#008FFB",
        },
        axisBorder: {
          show: true,
          color: "#008FFB",
        },
        labels: {
          style: {
            colors: "#008FFB",
          },
        },
        title: {
          text: "Flies",
          style: {
            color: "#008FFB",
          },
        },
      },
      {
        seriesName: "Spiders",
        opposite: true,
        axisTicks: {
          show: true,
          color: "#00E396",
        },
        axisBorder: {
          show: true,
          color: "#00E396",
        },
        labels: {
          style: {
            colors: "#00E396",
          },
        },
        title: {
          text: "Spiders",
          style: {
            color: "#00E396",
          },
        },
      },
    ],
    xaxis: {
      type: "datetime",
      min: new Date("2017-04-24T00:00:00Z").getTime(),
      max: new Date("2017-05-29T00:00:00Z").getTime(),
    },
  };
  const optionsLine: ApexOptions = {
    chart: {
      id: "chart1",
      height: 130,
      type: "area",
      brush: { target: "chart2", enabled: true },
      selection: {
        enabled: true,
        xaxis: {
          min: new Date("2017-04-24T00:00:00Z").getTime(),
          max: new Date("2017-05-29T00:00:00Z").getTime(),
        },
      },
    },
    colors: ["#008FFB", "#00E396"],
    stroke: { width: [1, 3], curve: ["straight", "monotoneCubic"] },
    fill: { type: "gradient", gradient: { opacityFrom: 0.91, opacityTo: 0.1 } },
    xaxis: { type: "datetime", tooltip: { enabled: false } },
    yaxis: { max: 100, tickAmount: 2 },
  };

    const series = [
      {
        name: "Desktops",
        data: [
          { x: new Date("2023-01-01").getTime(), y: 10 },
          { x: new Date("2023-02-01").getTime(), y: 41 },
          { x: new Date("2023-03-01").getTime(), y: 150 },
          { x: new Date("2023-04-01").getTime(), y: 50 },
        ],
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
      <ApexChartLine
        // series={series}
        // options={configuraciones}
        // chartId={1}
        // optionsLine={optionsLine}
      />
      <button onClick={handleOpenConfig}>configuraciones</button>
    </div>
  );
};
