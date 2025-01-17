import React from "react";
import ReactApexChart from "react-apexcharts";
import { Props } from "react-apexcharts";
import { CHARTCOLORS } from "./configurations/default";
import { DataPoint } from "./types";

export const data1: DataPoint[] = [
  { x: new Date("2023-01-01").getTime(), y: 30 },
  { x: new Date("2023-02-01").getTime(), y: 40 },
  { x: new Date("2023-03-01").getTime(), y: 35 },
  { x: new Date("2023-04-01").getTime(), y: 50 },
  { x: new Date("2023-05-01").getTime(), y: 49 },
  { x: new Date("2023-06-01").getTime(), y: 60 },
  { x: new Date("2023-07-02").getTime(), y: 100 },
  { x: new Date("2023-07-03").getTime(), y: 5 },
  { x: new Date("2023-07-04").getTime(), y: 40 },
  { x: new Date("2023-07-08").getTime(), y: 320 },
  { x: new Date("2023-08-09").getTime(), y: 0 },
];
const maxValue = Math.max(...data1.map((point) => point.y));

export const ApexChartLine: React.FC = () => {
  const [state, setState] = React.useState<Props>({
    series: [
      {
        name: "Flies",
        data: data1,
      },
    ],
    options: {
      chart: {
        id: "chart2",
        type: "line",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      colors: CHARTCOLORS.default,
      stroke: {
        width: 2,
        curve: "smooth",
      },

      markers: {
        size: 4,
      },
      xaxis: {
        type: "datetime",
      },

      yaxis: {
        title: {
          text: "Value",
        },
        min: 0,
        max: maxValue,
      },
    },
    seriesLine: [
      {
        name: "Flies",
        data: data1,
      },
    ],
    optionsLine: {
      chart: {
        id: "chart1",
        height: 800,
        type: "area",
        brush: {
          target: "chart2",
          enabled: true,
        },

        selection: {
          enabled: true,
          xaxis: {
            min: new Date("2023-01-01").getTime(),
            max: new Date("2023-05-01").getTime(),
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.75,
            opacityTo: 0.1,
          },
        },
      },
      colors: CHARTCOLORS.default,
      stroke: {
        width: 1,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.75,
          opacityTo: 0.1,
        },
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        min: 0,
        max: maxValue,
        tickAmount: 2,
      },
    },
  });

  return (
    <div className="w-full">
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={230}
        />
      </div>
      <div>
        <ReactApexChart
          options={state.optionsLine}
          series={state.seriesLine}
          type="area"
          height={130}
        />
      </div>
    </div>
  );
};
