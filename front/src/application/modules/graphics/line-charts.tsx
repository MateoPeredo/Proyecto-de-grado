import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
type dataSeries = { name: string; data: number[] };
interface propsLineChart {
  options?: ApexOptions;
  series: dataSeries[];
}
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
