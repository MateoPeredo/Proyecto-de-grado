import React from "react";
import ReactApexChart from "react-apexcharts";
import { propsLineChart } from "./types";
import { commonOptions } from "./configurations/common-options";
import { chartColors } from "./configurations/colors";

export const ApexChartLine: React.FC<propsLineChart> = ({
  options,
  series,
  chartId,
  colorScheme = "default",
}) => {
  const mergedOptions = {
    ...commonOptions,
    ...options,
    colors: chartColors[colorScheme] || chartColors["default"],
  };

  return (
    <div className=" w-full">
      <ReactApexChart
        options={mergedOptions}
        series={series}
        type={options?.chart?.type}
        height={350}
        id={chartId}
      />
    </div>
  );
};
