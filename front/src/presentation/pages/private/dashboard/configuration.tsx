import { Card } from "../../../shared/global/card";
import { ICON_CHART } from "../../../shared/global/icons";

export const ConfigurationDashboard = () => {
  const changeOptionChart = () => {
    
  };
  return (
    <section className="flex flex-col gap-4">
      <p className="flex-1 text-sm ">Cambiar tipo de grafica</p>
      <article className=" grid grid-cols-5 border rounded-md">
        <Card icon={ICON_CHART} onClick={changeOptionChart}>
          <img src="" alt="" />
        </Card>
      </article>
    </section>
  );
};
