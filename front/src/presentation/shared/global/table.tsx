import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
} from "@tanstack/react-table";

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

export const Table = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}></tr>
        ))}
      </thead>
      <tbody></tbody>
    </table>
  );
};
