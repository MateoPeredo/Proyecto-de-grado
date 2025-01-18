import { useChart } from "../../../../application/core/hooks/useChartConfig";

export const ConfigurationDashboard = ({ chartId }: { chartId: number }) => {
  const { settings, setColor, setDataLabel } = useChart();

  const handleChangeColor = () => {
    setColor(chartId, ["green"]);
  };
  const handleChangeLabel = () => {
    setDataLabel(chartId, settings[chartId]?.dataLabel);
  };
  return (
    <section className=" w-full flex flex-col gap-4">
      <p className="text-md ">Tipo de Gráfica</p>
      <article className="grid grid-cols-2 gap-2 ">
        <button onClick={handleChangeColor}>Cambiar Color</button>
        <button onClick={handleChangeLabel}>Poner Labels</button>
      </article>
    </section>
  );
};
