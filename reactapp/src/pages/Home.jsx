<<<<<<< HEAD
// Home.js
import React from 'react';
import TitlePage from '../components/TitlePage'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {

  // Datos para el gráfico de barras
  const data = {
    labels: ['Laptops', 'Tablets', 'Smartphones', 'Routers', 'Desktops'], // Tipos de dispositivos
    datasets: [
      {
        label: 'Cantidad de Dispositivos',
        data: [12, 19, 8, 15, 7], // Ejemplo de datos, cámbialos por los reales
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Conteo de Dispositivos por Tipo',
      },
    },
  };

  return (
    <>
      <div>
        <TitlePage title={'Dashboard'} />
      </div>

      <div className="p-4 md:p-8 bg-gray-100 min-h-screen mt-4 rounded-xl">

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          
          {/* Tarjeta de Recuentos Rápidos */}
          <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-700">Dispositivos de activos</h2>
            <p className="text-sm text-gray-500 mt-2">Información de dispositivos, estado, y más.</p>
            <div className="mt-4 flex items-center justify-between text-gray-600">
              <span className="text-xl font-bold">120</span>
              <span>Dispositivos activos</span>
            </div>
          </div>

          {/* Tarjeta de Acciones Rápidas */}
          <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-700">Dispositivos en mantenimiento </h2>
            <p className="text-sm text-gray-500 mt-2">Accede rápidamente a las opciones de gestión.</p>
            <div className="mt-4 flex items-center justify-between text-gray-600">
              <span className="text-xl font-bold">10</span>
              <span>Acciones disponibles</span>
            </div>
          </div>

          {/* Tarjeta de Gráfico Principal */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-700">Estadísticas de Dispositivos</h2>
            <p className="text-sm text-gray-500 mt-2">Comparación de dispositivos por tipo en el inventario.</p>
            <div className="mt-4 h-40">
              <Bar data={data} options={options} />
            </div>
          </div>

          {/* Tarjeta de Alertas */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-700">Alerta de Dispositivos</h2>
            <p className="text-sm text-gray-500 mt-2">
              Alerta de dispositivos por revisar. Las revisiones de los routers se realizan cada cierto tiempo.
            </p>
          </div>

          {/* Tarjeta de Cantidad de Dispositivos */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-700">Total de Dispositivos</h2>
            <ul className="text-sm text-gray-500 mt-4 list-disc list-inside">
              <li>Cantidad en estado regular</li>
              <li>Dispositivos totales por tipo</li>
              <li>Dispositivos por año</li>
            </ul>
          </div>
        </div>
        
      </div>

    </>
    
  );
};

export default Home;
=======
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
>>>>>>> api
