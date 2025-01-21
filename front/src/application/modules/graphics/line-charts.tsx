// import React, { useMemo } from "react";
// import ReactApexChart from "react-apexcharts";

// import { useChart } from "../../core/hooks/useChartConfig";
// import { DataPoint } from "../../core/types/chart.settings.type";
// import { CHARTCOLORS } from "./configurations/default";

// interface ApexChartLineProps {
//   chartId: number;
//   data: DataPoint[];
//   name: string;
//   titleY: string;
// }

// export const ApexChartLine: React.FC<ApexChartLineProps> = ({
//   chartId,
//   data,
//   name,
//   titleY,
// }) => {
//   const { settings } = useChart();

//   // Obtén las configuraciones del gráfico actual o usa valores por defecto
//   const chartSettings = settings[chartId] || {
//     colorChart: CHARTCOLORS.default,
//     maxData: { isSelect: false, dataMax: undefined, data: [] },
//     dataLabel: false,
//   };

//   const state = useMemo(() => {
//     const maxData =
//       chartSettings.maxData.dataMax ??
//       Math.max(...data.map((point) => point.y));

    
//   return (
//     <div className="w-full">
//       <ReactApexChart
//         options={state.options}
//         series={state.seriesLine}
//         type="line"
//         height={230}
//       />

//       <ReactApexChart
//         options={state.optionsLine}
//         series={state.seriesLine}
//         type="area"
//         height={130}
//       />
//     </div>
//   );
// };
