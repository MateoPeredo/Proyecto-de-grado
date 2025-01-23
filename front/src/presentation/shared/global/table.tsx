import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { ICON_SEARCH } from "./icons";
import { FilterButton } from "./button";

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
    <section className=" w-full h-full rounded-md overflow-hidden  shadow-md p-4 bg-white">
      <h5 className="font-bold my-4 text-lg ">Name Table</h5>
      <section className=" border  rounded-md ">
        <article className="flex justify-between  p-4">
          <FilterButton>Limpiar</FilterButton>
          <div className=" border-2 flex justify-center items-center  focus-within:border-primary rounded-md p-2 gap-2 hover:border-primary">
            {ICON_SEARCH}
            <input
              type="search"
              className=" rounded-md placeholder:text-sm placeholder:font-light outline-none"
              placeholder="Buscar"
            />
          </div>
        </article>
        <table className=" w-full h-full ">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-4 px-2 text-start text-sm   border"
                  >
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
                  <td
                    key={cell.id}
                    className="py-4  text-start px-2 border text-sm"
                  >
                    {String(cell.renderValue() ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};
