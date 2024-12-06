import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { formatIfDate } from "../utils/formatters";

const Table = ({ headers = [], data = [], onEdit, onDelete }) => {
  const [visibleColumns, setVisibleColumns] = useState(headers.map((header) => header.key));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  //console.log(data);

  // Ordena los datos por el ID más alto (suponiendo que 'id' es el campo de identificación)
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => b.id - a.id); // Orden descendente por 'id'
  }, [data]);

  // Configuración de columnas basada en headers
  const columns = useMemo(
    () =>
      headers.map((header, index) => ({
        accessorKey: header.key,
        header: header.label,
        cell: (info) => {
          const value = info.getValue();
          const columnKey = info.column.id; // Identificador de la columna
          const rowData = info.row.original; // Datos completos de la fila actual

          if (columnKey === "estadoId") {
            return rowData.estado?.descripcion || "Otro";
          }
  
          if (columnKey === "tipoId") {
            return rowData.tipo?.descripcion || "Otro";
          }

          if (columnKey === "habilitado") { //regla de mayor especificidad primero
            return value === 0 ? 'No' : 'Sí';
          }

          if (header.isDate) { 
            return value == null ? 'No registrado' : formatIfDate(info.getValue());
          }

          // Definir los valores predeterminados para campos específicos
          const defaultValues = {
            habilitado: "No registrado", //tecnicamente no debe haber ningun valor null para este campo ya que es requerido por defecto en el formulario
            color: "No registrado",
            marca: "No registrado",
            modelo: "No registrado",
            serie: "No registrado",
            ubicacion: "No registrado",
            tipoId: "Otro",
            estadoId: "Otro",
            dimensionLargo: "N/D",
            dimensionAlto: "N/D",
            dimensionProfundidad: "N/D",
          };
          
          // Si el campo tiene un valor predeterminado definido
          if (defaultValues[columnKey] !== undefined) {
            return value ?? defaultValues[columnKey];
          }

          if (header.key === "actions") {
            const rowData = info.row.original;
            return (
              <div className="flex gap-2">
                <button
                  className="text-blue-600 hover:text-blue-700 mx-auto"
                  onClick={() => onEdit(rowData)}
                >
                  <FaEdit size={25}/>
                </button>
                <button
                  className="text-red-600 hover:text-red-700 mx-auto"
                  onClick={() => onDelete(rowData.id)}
                >
                  <FaTrashAlt size={25} />
                </button>
              </div>
            );
          }
          
          // Lógica para combinar dimensiones
          if (columnKey === "dimensiones") {
            const largo = rowData.dimensionLargo ?? defaultValues.dimensionLargo;
            const alto = rowData.dimensionAlto ?? defaultValues.dimensionAlto;
            const profundidad = rowData.dimensionProfundidad ?? defaultValues.dimensionProfundidad;

            return `${largo} x ${alto} x ${profundidad}`;
          }

          return value;
        },
        meta: { alwaysVisible: index < 3 },
      })),
    [headers, onEdit, onDelete]
  );

  const filteredColumns = useMemo(
    () =>
      columns.filter(
        (col) => visibleColumns.includes(col.accessorKey) || col.meta?.alwaysVisible
      ),
    [columns, visibleColumns]
  );

  // Configuración de la tabla
  const table = useReactTable({
    data: sortedData,  // Pasamos los datos ordenados
    columns: filteredColumns,
    initialState: {
      pagination: { pageIndex: 0, pageSize: 5 },
      sorting: [{ id: 'id', desc: true }] // Ordenar por 'id' en orden descendente
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleColumnToggle = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key)
        ? prev.filter((col) => col !== key)
        : [...prev, key]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-0 bg-gray-100 rounded-xl shadow-md mt-4">
      <div className="pt-4 px-8 flex items-center justify-between mb-4">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center bg-gray-200 text-gray-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition"
          >
            <span>Mostrar Columnas</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute bg-white border border-gray-300 rounded-md mt-2 p-2 shadow-lg z-10"
            >
              {headers.map((header, index) => (
                <div key={header.key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={
                      visibleColumns.includes(header.key) || index < 3
                    }
                    disabled={index < 3}
                    onChange={() => handleColumnToggle(header.key)}
                  />
                  <label className="text-gray-600">{header.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-white px-3 py-2 rounded-md bg-gray-500 hover:bg-gray-600"
          >
            <FaArrowLeftLong />
          </button>
          <span>
            Página{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
            </strong>
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-white px-3 py-2 rounded-md bg-gray-500 hover:bg-gray-600"
          >
            <FaArrowRightLong />
          </button>
          <div>
            <span>Mostrar </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              {[5, 10, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg border border-gray-200">
          <thead className="bg-gray-200 text-gray-700">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-2 border-b border-gray-300 text-left cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() === "asc" && " 🔼"}
                    {header.column.getIsSorted() === "desc" && " 🔽"}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="text-gray-800">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 border-b border-gray-300 text-left">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}                    
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 h-8 md:h-9 rounded-2xl rounded-t"> </div>
    </div>
  );
};

export default Table;
