import { Card } from "../../../shared/global/card";
import imgLineBasic from "src/assets/charts/basic-line-chart.svg";
import imgLineLabel from "src/assets/charts/line-chart-data-labels.svg";
import imgLineTimeSeries from "src/assets/charts/line-chart-timeseries.svg";
export const ConfigurationDashboard = () => {
  const changeOptionChart = () => {};
  return (
    <section className=" w-full flex flex-col gap-4">
      <p className="text-md ">Tipo de Gráfica</p>
      <article className="grid grid-cols-2 gap-2 ">
        <Card onClick={changeOptionChart} img={imgLineBasic} />
        <Card onClick={changeOptionChart} img={imgLineLabel} />
        <Card onClick={changeOptionChart} img={imgLineTimeSeries} />
      </article>
    </section>
  );
};
