import { Card } from "../../../shared/global/card";
import { ICON_CHART } from "../../../shared/global/icons";
import imgLineBasic from "src/assets/charts/basic-line-chart.svg";
import imgLineLabel from "src/assets/charts/line-chart-data-labels.svg";
import imgLineTimeSeries from "src/assets/charts/line-chart-timeseries.svg";
export const ConfigurationDashboard = () => {
  const changeOptionChart = () => {};
  return (
    <section className="flex flex-col gap-4">
      <p className="flex-1 text-md ">Tipo de Gráfica</p>
      <article className=" flex flex-row gap-2 flex-wrap w-full ">
        <Card icon={ICON_CHART} onClick={changeOptionChart}>
          <img src={imgLineBasic} alt="" />
        </Card>
        <Card icon={ICON_CHART} onClick={changeOptionChart}>
          <img src={imgLineLabel} alt="" />
        </Card>
        <Card icon={ICON_CHART} onClick={changeOptionChart}>
          <img src={imgLineTimeSeries} alt="" />
        </Card>
      </article>
    </section>
  );
};
