import {React, useState, useEffect } from 'react';

import axios from 'axios';

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api";

const DeviceRegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // id: '',
    tipo: '',
    estado: '', //es de la otra tabla, por el momento lo dejamos como está
    ubicacion: '', // la ubicacion es de cada registro observado ojo pasar a la otra tabla
    habilitado: false, //falso por defecto
    //usuario: '', //esta en otra tabla, traer datos mediante referencia de la sesion actual
    fecha_ingreso: '',
    color: '',
    marca: '',
    modelo: '',
    serie: '',
    dimensionLargo: '',
    dimensionAlto: '',
    dimensionProfundidad: '',
    // registro: ''

  });

  const [tipos, setTipos] = useState([]); // State for device types
  const [estados, setEstados] = useState([]); // State for device types

  useEffect(() => {
    getAllTipos();
  }, []);

  useEffect(() => {
    getAllEstados();
  }, []);

  const getAllTipos = async () => {
    try {
      const response = await axios.get(`${endpoint}/tipos`);
      setTipos(response.data);
    } catch (error) {
      console.error('Ocurrió un error al recuperar los tipos:', error);
    }
  };

  const getAllEstados = async () => {
    try {
      const response = await axios.get(`${endpoint}/estados`);
      setEstados(response.data);
    } catch (error) {
      console.error('Ocurrió un error al recuperar los estados:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value, // Ajuste para manejar checkboxes
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      tipo: formData.tipo,
      estado: formData.estado,
      ubicacion: formData.ubicacion,
      habilitado: formData.habilitado,
      fecha_ingreso: formData.fecha_ingreso,
      marca: formData.marca,
      modelo: formData.modelo,
      serie: formData.serie,
      color: formData.color,
      dimensionLargo: formData.dimensionLargo,
      dimensionAlto: formData.dimensionAlto,
      dimensionProfundidad: formData.dimensionProfundidad,
    };
    // console.log("dataToSend" + dataToSend);
    try {
      // Realizar la solicitud POST a la API de Laravel
      await axios.post(`${endpoint}/dispositivo`, dataToSend);
      console.log('Registro existoso de dispositivo.');
      onClose(dataToSend); // Cerrar el modal después de registrar
    } catch (error) {
      console.error('Error al registrar el dispositivo:', error);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Generar automaticamente un ID con la fecha y el año */}

      {/* CAMPOS DE FORMULARIO */}
      <div className="md:grid md:grid-cols-2 md:gap-4">
        {/* Tipo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo</label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-[9px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Selecciona un tipo</option>
            {tipos.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.descripcion}
              </option>
            ))}
          </select>
        </div>

        {/* Estado */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Estado</label>
          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-[9px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Selecciona un estado</option>
            {estados.map((estado) => (
              <option key={estado.id} value={estado.id}>
                {estado.descripcion}
              </option>
            ))}
          </select>
        </div>

        {/* Ubicación */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Ubicación</label>
          <input
            type="text"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Habilitado */}
        <div className="mt-4">
          <label htmlFor="habilitado" className="flex items-center cursor-pointer">
            <span className="mr-3 text-sm font-medium text-gray-700">Habilitado</span>
            <div className="relative">
              <input
                type="checkbox"
                id="habilitado"
                name="habilitado"
                checked={formData.habilitado}
                className="sr-only peer"
                // onChange={(e) => setHabilitado(e.target.checked)} // Manejo del estado
                onChange={handleChange}
              />
              <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-blue-500 transition-colors"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:translate-x-4 peer-checked:border-transparent transition-transform"></div>
            </div>
          </label>
        </div>


        {/* Fecha Ingreso */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha Ingreso</label>
          <input
            type="date"
            name="fecha_ingreso"
            value={formData.fecha_ingreso}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Marca */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Marca</label>
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Modelo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Modelo</label>
          <input
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            
          />
        </div>

        {/* Serie */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Serie</label>
          <input
            type="text"
            name="serie"
            value={formData.serie}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            
          />
        </div>

        {/* Dimensiones */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Dimensiones (cm)</label>
          <div className="flex md:flex-row md:gap-4 mt-1">
            <input
              type="number"
              name="dimensionLargo"
              placeholder="Largo"
              value={formData.dimensionLargo}
              min="0"
              onChange={handleChange}
              className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              
            />
            <input
              type="number"
              name="dimensionAlto"
              placeholder="Alto"
              value={formData.dimensionAlto}
              min="0"
              onChange={handleChange}
              className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              
            />
            <input
              type="number"
              name="dimensionProfundidad"
              placeholder="Profundidad"
              value={formData.dimensionProfundidad}
              min="0"
              onChange={handleChange}
              className="w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              
            />
          </div>
        </div>
      </div>


      <div className="flex justify-between space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-400 "
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600"
        >
          Registrar
        </button>
      </div>
    </form>
  );
};

export default DeviceRegistrationForm;