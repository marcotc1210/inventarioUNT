import React, { useState } from 'react';
import axios from 'axios';
import { TbPassword } from 'react-icons/tb';

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api"

const UserRegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    document: '',
    name: '',
    lastname1: '',
    lastname2: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      document: formData.document,
      name: formData.name,
      lastname1: formData.lastname1,
      lastname2: formData.lastname2,
      email: formData.email,
      password: formData.password,
    };

    try {
      // Realizar la solicitud POST a la API de Laravel
      await axios.post(`${endpoint}/usuario`, dataToSend);
      onClose(); // Cerrar el modal después de registrar
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-sm font-medium text-gray-700">Documento</label>
        <input
          type="text"
          name="document"
          value={formData.document}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="md:flex md:space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Apellido 1</label>
          <input
            type="text"
            name="lastname1"
            value={formData.lastname1}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Apellido 2</label>
          <input
            type="text"
            name="lastname2"
            value={formData.lastname2}
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700"> Password </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="flex justify-between space-x-4">
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-400"
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
