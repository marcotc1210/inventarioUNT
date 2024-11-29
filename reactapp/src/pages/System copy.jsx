import React, { useState, useEffect } from 'react';
import TitlePage from '../components/TitlePage';
import NoRegisterBanner from '../components/NoRegisterBanner';
import axios from 'axios';

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api";

const System = () => {
  const [descripcion, setDescripcion] = useState('');
  const [descripcionEstado, setDescripcionEstado] = useState('');
  const [tiposData, setTiposData] = useState([]);
  const [estadosData, setEstadosData] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const [tiposResponse, estadosResponse] = await Promise.all([
        axios.get(`${endpoint}/tipos`),
        axios.get(`${endpoint}/estados`),
      ]);

      setTiposData(tiposResponse.data);
      setEstadosData(estadosResponse.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const storeTipo = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${endpoint}/tipo`, { descripcion });
      setDescripcion('');
      getAllData();
      alert("Se agregó el tipo correctamente.");
    } catch (error) {
      console.error('Error al guardar el tipo:', error);
    }
  };

  const storeEstado = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${endpoint}/estado`, { descripcion: descripcionEstado });
      setDescripcionEstado('');
      getAllData();
      alert("Se agregó el estado correctamente.");
    } catch (error) {
      console.error('Error al guardar el estado:', error);
    }
  };

  const deleteItem = async (type, id) => {
    if (window.confirm('¿Estás seguro de eliminar este registro?')) {
      try {
        await axios.delete(`${endpoint}/${type}/${id}`);
        getAllData();
        alert("Registro eliminado correctamente.");
      } catch (error) {
        console.error(`Error al eliminar el ${type}:`, error);
      }
    }
  };

  return (
    <div>
      <TitlePage title={'Ajustes del Sistema'} />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Formulario para Tipos */}
        <form onSubmit={storeTipo} className='bg-white p-4 shadow rounded'>
          <h2 className='text-lg font-semibold mb-4'>Registrar Tipo</h2>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type='text'
            placeholder='Descripción del Tipo'
            className='w-full p-2 border rounded mb-4'
          />
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Registrar</button>
        </form>

        {/* Formulario para Estados */}
        <form onSubmit={storeEstado} className='bg-white p-4 shadow rounded'>
          <h2 className='text-lg font-semibold mb-4'>Registrar Estado</h2>
          <input
            value={descripcionEstado}
            onChange={(e) => setDescripcionEstado(e.target.value)}
            type='text'
            placeholder='Descripción del Estado'
            className='w-full p-2 border rounded mb-4'
          />
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>Registrar</button>
        </form>
      </div>

      {/* Tabla combinada */}
      <div className='mt-8'>
        {tiposData.length > 0 || estadosData.length > 0 ? (
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border border-gray-300 p-2'>#</th>
                <th className='border border-gray-300 p-2'>Descripción</th>
                <th className='border border-gray-300 p-2'>Tipo</th>
                <th className='border border-gray-300 p-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tiposData.map((tipo, index) => (
                <tr key={`tipo-${tipo.id}`} className='hover:bg-gray-100'>
                  <td className='border border-gray-300 p-2'>{index + 1}</td>
                  <td className='border border-gray-300 p-2'>{tipo.descripcion}</td>
                  <td className='border border-gray-300 p-2'>Tipo</td>
                  <td className='border border-gray-300 p-2 text-center'>
                    <button
                      className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2'
                      onClick={() => deleteItem('tipo', tipo.id)}
                    >Eliminar</button>
                  </td>
                </tr>
              ))}
              {estadosData.map((estado, index) => (
                <tr key={`estado-${estado.id}`} className='hover:bg-gray-100'>
                  <td className='border border-gray-300 p-2'>{tiposData.length + index + 1}</td>
                  <td className='border border-gray-300 p-2'>{estado.descripcion}</td>
                  <td className='border border-gray-300 p-2'>Estado</td>
                  <td className='border border-gray-300 p-2 text-center'>
                    <button
                      className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2'
                      onClick={() => deleteItem('estado', estado.id)}
                    >Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <NoRegisterBanner>No hay registros disponibles.</NoRegisterBanner>
        )}
      </div>
    </div>
  );
};

export default System;
