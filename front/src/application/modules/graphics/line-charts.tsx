import React from "react";
import ReactApexChart from "react-apexcharts";
import { propsLineChart } from "./types";

export const ApexChartLine: React.FC<propsLineChart> = ({
  options,
  series,
}) => {
  return (
    <div className=" w-full">
      <ReactApexChart
        options={options}
        series={series}
        type={options?.chart?.type}
        height={350}
      />
    </div>
  );
};
