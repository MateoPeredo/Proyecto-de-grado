import { Wrapper } from "../../../shared/global/wrapper";
import { SectionChart } from "./sections/charts.sections";
import { SectionTable } from "./sections/table.sections";
import { SectionTile } from "./sections/tile.sections";

export const Dashboard = () => {
  return (
    <Wrapper title="Dashborad">
      <SectionTile />
      <SectionChart />
      <SectionTable />
    </Wrapper>
  );
};
