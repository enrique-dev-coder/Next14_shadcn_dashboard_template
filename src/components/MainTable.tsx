'use client';
import { Button } from './ui/button';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface DataTableProps {
  columns: any;
  data: any;
}

// ejemplo de la tabla con paginacion https://tanstack.com/table/v8/docs/examples/react/pagination
// docs --> https://tanstack.com/table/v8/docs/api/features/pagination
export function DataTable({ columns, data }: DataTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // asi obtienes el estado de la Tabla
  // console.log(table.getState());

  return (
    <div className="relative">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* table footer*/}
      <div className="fixed bottom-0 p-4">
        <div className="flex   items-center justify-center space-x-4">
          <div>
            <p className="font-bold">
              {' '}
              Página {table.getState().pagination.pageIndex + 1} de{' '}
              {table.getPageCount()}{' '}
            </p>
          </div>
          <div>
            <span className="flex items-center gap-1">
              <select
                className="p-1  rounded-md"
                onChange={(e) => table.setPageIndex(Number(e.target.value))}
              >
                <option disabled selected>
                  Selecciona una Página
                </option>
                {table.getPageOptions()?.map((page) => (
                  <option key={page} value={page}>
                    {page + 1}
                  </option>
                ))}
              </select>
              {/* <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border p-1 rounded w-16"
              /> */}
            </span>
          </div>
          <div className="flex  space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
