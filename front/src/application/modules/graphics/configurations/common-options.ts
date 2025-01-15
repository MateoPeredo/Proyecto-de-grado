import { ApexOptions } from "apexcharts";

export const commonOptions :ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: ["straight", "monotoneCubic"],
    colors: ["#E30613"],
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#E30613"],
      opacity: 0.1,
    },
  },
};
