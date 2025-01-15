import { ApexOptions } from "apexcharts";

export interface propsLineChart {
  options?: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chartId: number | string;
  colorScheme?: string;
}

export type StrokeOption = {
  curve: ApexStroke;
  colors: string[];
};

export type OptionTypeChartLine = ApexChart;
