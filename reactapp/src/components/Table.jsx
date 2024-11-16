import React from 'react';
import { FaPlusCircle } from "react-icons/fa";


const Table = ({ headers = [], data }) => {

  return (
    <>
      <div className="p-0 bg-gray-100 rounded-xl shadow-md mt-4">

        {/* Bloque superior con título, filtro y paginación */}
        <div className="pt-4 px-8 flex items-center justify-between mb-4">

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Mostrar</span>
            <select className="border border-gray-300 rounded-md text-gray-600 px-2 py-1">
              <option>Columna</option>
              <option>Otra opción</option>
            </select>

            <div className="flex items-center space-x-1">
              <button className="text-gray-600">&larr;</button>
              <span className="px-2 py-1 bg-gray-200 rounded-md">1</span>
              <button className="text-gray-600">2</button>
              <span>...</span>
              <button className="text-gray-600">68</button>
              <button className="text-gray-600">&rarr;</button>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg border border-gray-200">
            
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                {/* Renderizar encabezados */}
                {headers.map((header, index) => (
                  <th key={index} className="p-2 border-b border-gray-300 text-left">
                    {/* {header.isCheckbox ? <input type="checkbox" /> : header.label} */}
                    {header.label} 
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody className="text-gray-800">
              {/* Filas de datos */}
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100">
                  {headers.map((header, colIndex) => (
                    <td key={colIndex} className="p-2 border-b border-gray-300 text-left">
                      {header.isCheckbox ? (
                        <input type="checkbox" />
                      ) : (
                        row[header.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </>
  );
};

export default Table;