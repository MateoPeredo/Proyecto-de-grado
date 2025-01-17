import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Props } from "react-apexcharts";
import { CHARTCOLORS } from "./configurations/default";
import { useChart } from "../../core/hooks/useChartConfig";
import { DataPoint } from "../../core/types/chart.settings.type";

interface ApexChartLineProps {
  chartId: number;
  data: DataPoint[];
  name: string;
  titleY: string;
}
export const ApexChartLine: React.FC<ApexChartLineProps> = ({
  chartId,
  data,
  name,
  titleY,
}) => {
  const { settings } = useChart();

  const [state, setState] = React.useState<Props>({
    series: [
      {
        name: name,
        data: data,
      },
    ],
    options: {
      chart: {
        id: "chart2",
        type: "area",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: true,
          tools: {
            download: true,
          },
        },
      },

      colors: settings[chartId]?.colorChart || CHARTCOLORS.default,
      stroke: {
        width: 2,
        curve: "smooth",
      },

      markers: {
        size: 4,
      },
      dataLabels: {
        enabled: settings[chartId]?.dataLabel || false,
      },
      xaxis: {
        type: "datetime",
        labels: {
          format: "dd MMM",
        },
        tooltip: {
          enabled: true,
        },
      },

      yaxis: {
        title: {
          text: titleY,
        },
        min: 0,
        max:
          settings[chartId]?.maxData.dataMax ??
          Math.max(...data.map((point) => point.y)),
      },
    },
    seriesLine: [
      {
        name: "MGb",
        data: data,
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
            min: Math.min(...data.map((point) => point.x)),
            max: Math.max(...data.map((point) => point.x)),
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
      colors: settings[chartId]?.colorChart || CHARTCOLORS.default,

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
        max: settings[chartId]?.maxData.dataMax,
        tickAmount: 2,
      },
    },
  });

  useEffect(() => {
    if (settings[chartId]) {
      console.log("Esta cambiando seguido ");

      setState((prev) => ({
        ...prev,
        seriesLine: [
          {
            color: settings[chartId]?.colorChart || CHARTCOLORS.default, 
          },
        ],
        options: {
          ...prev.options,
          colors: settings[chartId]?.colorChart,
          dataLabels: { enabled: settings[chartId]?.dataLabel },
          yaxis: {
            ...prev.options?.yaxis,
            max: settings[chartId]?.maxData.dataMax,
          },
        },
      }));
    }
  }, [settings, chartId]);
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
