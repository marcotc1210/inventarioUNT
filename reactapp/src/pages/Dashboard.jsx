import React from 'react';
import TitlePage from '../components/TitlePage'

const Dashboard = () => {

  return (
    <>
      <div className='mb-4' >
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
              <p className="text-4xl font-bold text-blue-800 self-end">120</p>
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
              <p className="text-4xl font-bold text-red-800 self-end">15</p>
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
              <p className="text-4xl font-bold text-yellow-800 self-end">30</p>
            </div>
          </div>

        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Gráfico Estadístico 1</h3>
            <div className="h-64 bg-gray-200 rounded">Gráfico Placeholder</div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Gráfico Estadístico 2</h3>
            <div className="h-64 bg-gray-200 rounded">Gráfico Placeholder</div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Dashboard;