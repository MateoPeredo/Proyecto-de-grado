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
    <section className=" w-full h-full rounded-md overflow-hidden border shadow-md p-4">
      <h5>Name Table</h5>
      <div className="">
        <input type="search" className="border rounded-md" />
      </div>
      <table className="border w-full h-full ">
        <thead className=" font-light  bg-primary/20 text-primary ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="py-4 text-center text-xs">
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
