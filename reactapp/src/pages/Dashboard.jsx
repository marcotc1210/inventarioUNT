import {React, useEffect, useState} from 'react';
import TitlePage from '../components/TitlePage';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import api from '../utils/api';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {

  const [data, setData] = useState(null); // Estado para guardar los datos
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        const response = await api.get('/data/dashboard'); // Endpoint 
        setData(response.data); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); // El array vacío [] asegura que la petición se haga solo una vez

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  // Datos para el gráfico de dispositivos por tip
  const dataDispositivosPorTipo = {
    labels: ['Router', 'Switch', 'Laptop', 'Desktop', '554','dgad', 'asdf','asdf','asdf','asdf','asdf','dfg'],  // Tipos de dispositivos
    datasets: [
      {
        label: 'Dispositivos por Tipo',
        data: [40, 30, 20, 30, 10,5,5,6,5,5,87,65],  // Cantidad de dispositivos por tipo
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones para el gráfico de dispositivos por tipo
  const optionsDispositivosPorTipo = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Dispositivos por Tipo',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Tipo de Dispositivo',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Cantidad',
        },
        beginAtZero: true,
      },
    },
  };

  // Datos para el gráfico de dispositivos por año
  const dataDispositivosPorAnio = {
    labels: ['2020', '2021', '2022', '2023'],  // Años
    datasets: [
      {
        label: 'Dispositivos por Año',
        data: [50, 60, 70, 80],  // Cantidad de dispositivos por año
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones para el gráfico de dispositivos por año
  const optionsDispositivosPorAnio = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Dispositivos por Año',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Año',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Cantidad',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className='mb-4'>
        <TitlePage title={'Dashboard'} />
      </div>

      <div className="p-6 bg-gray-100 min-h-screen rounded-xl">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {/* Total Devices */}
          <div className="bg-white shadow-md rounded-lg p-6 flex relative h-32 overflow-hidden">
            <div className="absolute inset-0 border-l-4 border-blue-500 opacity-20 pointer-events-none"></div>
            <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-200 opacity-20 w-32 h-32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="9" y1="20" x2="24" y2="5" />
                <line x1="0" y1="24" x2="24" y2="0" />
              </svg>
            </div>
            <div className="w-full flex flex-col justify-between">
              <h2 className="text-sm font-semibold text-gray-500">Total Dispositivos</h2>
              <p className="text-4xl font-bold text-blue-800 self-end">{data?.total_devices}</p>
            </div>
          </div>

          {/* Inactive Devices */}
          <div className="bg-white shadow-md rounded-lg p-6 flex relative h-32 overflow-hidden">
            <div className="absolute inset-0 border-l-4 border-red-900 opacity-30 pointer-events-none"></div>
            <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-red-200 opacity-20 w-32 h-32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="9" y1="20" x2="24" y2="5" />
                <line x1="0" y1="24" x2="24" y2="0" />
              </svg>
            </div>
            <div className="w-full flex flex-col justify-between">
              <h2 className="text-sm font-semibold text-gray-500">Dispositivos Inactivos</h2>
              <p className="text-4xl font-bold text-red-800 self-end">{data?.inactive_devices}</p>
            </div>
          </div>

          {/* Regular State Devices */}
          <div className="bg-white shadow-md rounded-lg p-6 flex relative h-32 overflow-hidden">
            <div className="absolute inset-0 border-l-4 border-yellow-500 opacity-20 pointer-events-none"></div>
            <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-yellow-200 opacity-20 w-32 h-32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="9" y1="20" x2="24" y2="5" />
                <line x1="0" y1="24" x2="24" y2="0" />
              </svg>
            </div>
            <div className="w-full flex flex-col justify-between">
              <h2 className="text-sm font-semibold text-gray-500">Dispositivos en Estado Regular</h2>
              <p className="text-4xl font-bold text-yellow-800 self-end">{data?.regular_state_devices}</p>
            </div>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Dispositivos por Tipo</h3>
            <div className="h-64 bg-gray-200 rounded">
              <Bar data={dataDispositivosPorTipo} options={optionsDispositivosPorTipo} />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Dispositivos por Año</h3>
            <div className="h-64 bg-gray-200 rounded">
              <Bar data={dataDispositivosPorAnio} options={optionsDispositivosPorAnio} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
