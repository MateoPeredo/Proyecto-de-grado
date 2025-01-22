import { ColumnDef } from "@tanstack/react-table";
import { Table } from "../../../../shared/global/table";

const data = [
  { id: 1, name: "Juan", age: 25 },
  { id: 2, name: "Ana", age: 30 },
  { id: 3, name: "Luis", age: 35 },
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nombre" },
  { accessorKey: "age", header: "Edad" },
];

export const SectionTable = () => {
  return <Table data={data} columns={columns} />;
};
