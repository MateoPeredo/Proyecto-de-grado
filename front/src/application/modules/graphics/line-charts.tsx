import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

export const dates = [
  { x: new Date("2023-01-01").getTime(), y: 30 },
  { x: new Date("2023-02-01").getTime(), y: 40 },
  { x: new Date("2023-03-01").getTime(), y: 35 },
  { x: new Date("2023-04-01").getTime(), y: 50 },
  { x: new Date("2023-05-01").getTime(), y: 49 },
  { x: new Date("2023-06-01").getTime(), y: 60 },
  { x: new Date("2023-07-01").getTime(), y: 70 },
  { x: new Date("2023-08-01").getTime(), y: 91 },
];
interface PropChart {
  className?: string;
}
export const ApexChartLine: React.FC<PropChart> = ({ className }) => {
  const [state, setState] = React.useState<{
    series: { name: string; data: { x: number; y: number }[] }[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: "XYZ MOTORS",
        data: dates,
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: false,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      colors: ["#E30613"],
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Trafico detectado",
        align: "left",
      },
      fill: {
        type: "gradient",
        colors: ["red"],
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val: number) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    },
  });
  return (
    <section className={`w-full p-2 border shadow-md rounded-md  ${className}`}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />

      {/* <ReactApexChart
        options={state.optionsLine}
        series={state.seriesLine}
        type="area"
        height={130}
      /> */}
    </section>
  );
};
