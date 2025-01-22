import { ApexChartLine } from "../../../../../application/modules/graphics/line-charts";

export const SectionChart = () => {
  return (
    <section className="grid grid-cols-3 gap-4 ">
      <ApexChartLine className="col-span-2" />
      <ApexChartLine className="col-span-1" />
    </section>
  );
};
