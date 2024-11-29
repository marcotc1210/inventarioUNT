import Table from "../components/Table";
import React, { useState, useEffect } from "react";
import TitlePage from '../components/TitlePage';
import NoRegisterBanner from '../components/NoRegisterBanner';
import axios from "axios";

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api";

const System = () => {
  const [descripcionTipo, setDescripcionTipo] = useState("");
  const [descripcionEstado, setDescripcionEstado] = useState("");
  const [tiposData, setTiposData] = useState([]);
  const [estadosData, setEstadosData] = useState([]);

  const tiposHeaders = [
    { key: "id", label: "ID" },
    { key: "descripcion", label: "Descripción" },
    { key: "actions", label: "Acciones" },
  ];

  const estadosHeaders = [
    { key: "id", label: "ID" },
    { key: "descripcion", label: "Descripción" },
    { key: "actions", label: "Acciones" },
  ];

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
      console.error("Error al obtener los datos:", error);
    }
  };

  const storeTipo = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${endpoint}/tipo`, { descripcion: descripcionTipo });
      setDescripcionTipo("");
      getAllData();
      alert("Se agregó el tipo correctamente.");
    } catch (error) {
      console.error("Error al guardar el tipo:", error);
    }
  };

  const storeEstado = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${endpoint}/estado`, { descripcion: descripcionEstado });
      console.log(descripcionEstado)
      setDescripcionEstado("");
      getAllData();
      alert("Se agregó el estado correctamente.");
    } catch (error) {
      console.error("Error al guardar el estado:", error);
    }
  };

  const deleteItem = async (type, id) => {
    if (window.confirm("¿Estás seguro de eliminar este registro?")) {
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
    <div >
      <TitlePage title={'Ajustes del Sistema'} />

      <div className="my-4">
        <h2 className="text-gray-800 text-lg font-bold mb-3">Tipos</h2>

        <form onSubmit={storeTipo} className="flex" >
          <input
            type="text"
            name="tipo"
            value={descripcionTipo}
            onChange={(e) => setDescripcionTipo(e.target.value)}
            placeholder="Ingrese un tipo de dispositivo"
            className="w-1/2 lg:w-1/4 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          
          <button type="submit" className="mx-4 bg-gray-600 hover:bg-gray-800 text-white px-5 py-2 rounded-lg">Agregar Tipo </button>

        </form>

        <Table
          headers={tiposHeaders}
          data={tiposData}
          onEdit={(item) => console.log("Editar Tipo:", item)}
          onDelete={(item) => deleteItem("tipo", item.id)}
        />
      </div>

      <div className="my-4">
        <h2 className="text-gray-800 text-lg font-bold mt-8 mb-4">Estados</h2>

        <form onSubmit={storeEstado} className="flex" >
          
        <input
            type="text"
            name="estado"
            value={descripcionEstado}
            onChange={(e) => setDescripcionEstado(e.target.value)}
            placeholder="Ingrese un estado de dispositivo"
            className="w-1/2 lg:w-1/4 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button type="submit" className="mx-4 bg-gray-600 hover:bg-gray-800 text-white px-5 py-2 rounded-lg">Agregar Estado </button>
        </form>

        <Table
          headers={estadosHeaders}
          data={estadosData}
          onEdit={(item) => console.log("Editar Estado:", item)}
          onDelete={(item) => deleteItem("estado", item.id)}
        />
      </div>

    </div>
  );
};

export default System;
