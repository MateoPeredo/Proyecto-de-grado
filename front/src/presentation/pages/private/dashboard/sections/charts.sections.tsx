import { ApexChartLine } from "../../../../../application/modules/graphics/line-charts";

export const SectionChart = () => {
  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ApexChartLine className="md:col-span-2 lg:col-span-2" />
      <ApexChartLine className="md:col-span-1 lg:col-span-1" />
    </section>
  );
};
