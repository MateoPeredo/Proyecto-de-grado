import { ApexOptions } from "apexcharts";


export interface propsLineChart {
  options?: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chartId: number | string;
  colorScheme?: string;
  optionsLine?: any;
  seriesLine?: any;
}

export type OptionTypeChartLine = ApexChart;


