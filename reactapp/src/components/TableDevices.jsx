import React from 'react'

const Table = () => {
  const data = [
    { id: '022456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '122456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '222456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '322456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '422456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '522456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '622456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '722456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '822456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '922456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
    { id: '122456', marca: 'Marca A', modelo: 'Modelo X', serie: 'S123', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno' },
  ];

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Tipo', accessor: 'tipo' },
    { Header: 'Ubicación', accessor: 'ubicacion' },
    { Header: 'Estado', accessor: 'estado' },
    { Header: 'Marca', accessor: 'marca' },
    { Header: 'Modelo', accessor: 'modelo' },
    { Header: 'Color', accessor: 'color' },
    { Header: 'Serie', accessor: 'serie' },
    { Header: 'Dimensiones', accessor: 'dimensiones' },
    { Header: 'Año', accessor: 'anio' },
    { Header: 'Usuario', accessor: 'usuario' },
  ];

  return (
    <>
      <div class="p-0 bg-gray-100 rounded-xl shadow-md">
       {/* Bloque superior con título, filtro y paginación */}
      <div class="pt-4 px-8 flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
              <h2 class="text-lg font-semibold">Registrar nuevo</h2>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-full">
                  +
              </button>
          </div>

          <div class="flex items-center space-x-4">
              <span class="text-gray-600">Mostrar</span>
              <select class="border border-gray-300 rounded-md text-gray-600 px-2 py-1">
                  <option>Columna</option>
                  <option>Otra opción</option>
              </select>

              <div class="flex items-center space-x-1">
                  <button class="text-gray-600">&larr;</button>
                  <span class="px-2 py-1 bg-gray-200 rounded-md">1</span>
                  <button class="text-gray-600">2</button>
                  <span>...</span>
                  <button class="text-gray-600">68</button>
                  <button class="text-gray-600">&rarr;</button>
              </div>
          </div>
      </div>

      {/* <!-- Tabla --> */}
      <div class="overflow-x-auto">
          <table class="min-w-full bg-white rounded-lg border border-gray-200">
              <thead class="bg-gray-200 text-gray-700">
                  <tr>
                      <th class="p-2 border-b border-gray-300">
                          <input type="checkbox" />
                      </th>
                      <th class="p-2 border-b border-gray-300">ID</th>
                      <th class="p-2 border-b border-gray-300">Marca</th>
                      <th class="p-2 border-b border-gray-300">Modelo</th>
                      <th class="p-2 border-b border-gray-300">Serie</th>
                      <th class="p-2 border-b border-gray-300">Color</th>
                      <th class="p-2 border-b border-gray-300">Ubicación</th>
                      <th class="p-2 border-b border-gray-300">Ubicación</th>
                      <th class="p-2 border-b border-gray-300">Ubicación</th>
                      <th class="p-2 border-b border-gray-300">Estado</th>
                  </tr>
              </thead>
              <tbody class="text-gray-800">
                  <tr class="hover:bg-gray-100">
                      <td class="p-2 border-b border-gray-300 text-center">
                          <input type="checkbox" />
                      </td>
                      <td class="p-2 border-b border-gray-300 text-center">022456</td>
                      <td class="p-2 border-b border-gray-300 text-center">022456</td>
                      <td class="p-2 border-b border-gray-300 text-center">022456</td>
                      <td class="p-2 border-b border-gray-300 text-center">022456</td>
                      <td class="p-2 border-b border-gray-300 text-center">022456</td>
                      <td class="p-2 border-b border-gray-300 text-center">022456</td>
                      <td class="p-2 border-b border-gray-300 text-center">022456</td>
                      <td class="p-2 border-b border-gray-300 text-center">022456</td>
                      <td class="p-2 border-b border-gray-300 text-center">BUENO</td>
                  </tr>
                  {/* <!-- Repite más filas según sea necesario --> */}
              </tbody>
          </table>
      </div>
  </div>

    </>
  )
}

export default Table