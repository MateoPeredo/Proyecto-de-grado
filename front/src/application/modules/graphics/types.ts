import { ApexOptions } from "apexcharts";

export interface propsLineChart {
  options?: ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
}
