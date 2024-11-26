import React, { useState } from 'react';

const UserRegistrationForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    dni: '',
    nombres: '',
    apellidos: '',
    correo: '',
    imagen: null,
    rol: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">DNI</label>
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="md:flex md:space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Nombres</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Correo</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Imagen de rostro</label>
        <input
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Rol</label>
        <select
          name="rol"
          value={formData.rol}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Seleccione un rol</option>
          <option value="admin">Administrador</option>
          <option value="usuario">Usuario</option>
          <option value="invitado">Invitado</option>
        </select>
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

export default UserRegistrationForm;
