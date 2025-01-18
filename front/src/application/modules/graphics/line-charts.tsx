import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useChart } from "../../core/hooks/useChartConfig";
import { DataPoint } from "../../core/types/chart.settings.type";
import { CHARTCOLORS } from "./configurations/default";

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

  // Obtén las configuraciones del gráfico actual o usa valores por defecto
  const chartSettings = settings[chartId] || {
    colorChart: CHARTCOLORS.default,
    maxData: { isSelect: false, dataMax: undefined, data: [] },
    dataLabel: false,
  };

  const state = useMemo(() => {
    const maxData =
      chartSettings.maxData.dataMax ??
      Math.max(...data.map((point) => point.y));

    const options: ApexOptions = {
      chart: {
        id: `chart${chartId}`,
        type: "line",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: true,
          tools: {
            download: true,
          },
        },
      },
      colors: chartSettings.colorChart,
      stroke: { width: 2, curve: "smooth" },
      markers: { size: 4 },
      dataLabels: { enabled: chartSettings.dataLabel },
      xaxis: {
        type: "datetime",
        labels: { format: "dd MMM" },
        tooltip: { enabled: true },
      },
      yaxis: {
        title: { text: titleY },
        min: 0,
        max: maxData,
      },
    };

    const seriesLine = [
      {
        name: name,
        data,
      },
    ];

    const optionsLine: ApexOptions = {
      chart: {
        id: `chart${chartId}-line`,
        height: 130,
        type: "area",
        brush: {
          target: `chart${chartId}`,
          enabled: true,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: Math.min(...data.map((point) => point.x)),
            max: Math.max(...data.map((point) => point.x)),
          },
        },
      },
      colors: chartSettings.colorChart,
      stroke: { width: 1, curve: "smooth" },
      xaxis: {
        type: "datetime",
        tooltip: { enabled: false },
      },
      yaxis: {
        min: 0,
        max: chartSettings.maxData.dataMax,
        tickAmount: 2,
      },
    };

    return { options, seriesLine, optionsLine };
  }, [chartSettings, data, name, titleY, chartId]);

  return (
    <div className="w-full">
      <ReactApexChart
        options={state.options}
        series={state.seriesLine}
        type="line"
        height={230}
      />

      <ReactApexChart
        options={state.optionsLine}
        series={state.seriesLine}
        type="area"
        height={130}
      />
    </div>
  );
};
