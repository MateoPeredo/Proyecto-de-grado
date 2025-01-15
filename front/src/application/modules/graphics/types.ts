import { ApexOptions } from "apexcharts";

export interface propsLineChart {
  options?: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
}
export type ColorOption = {
  color: string;
  opacity: number;
};

export type StrokeOption = {
  curve: ApexStroke;
  colors: string[];
};

export type OptionTypeChartLine = ApexChart
