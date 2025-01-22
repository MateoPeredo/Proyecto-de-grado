import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";

interface PropsTable<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
}
export const Table = <T extends object>({ data, columns }: PropsTable<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className=" w-full h-full rounded-md overflow-hidden ">
      <table className="border w-full h-full ">
        <thead className="bg-primary text-white font-light text-sm ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-2 text-center">
                  {header.isPlaceholder
                    ? null
                    : typeof header.column.columnDef.header === "function"
                    ? header.column.columnDef.header(header.getContext())
                    : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 border text-start px-2">
                  {String(cell.renderValue() ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
