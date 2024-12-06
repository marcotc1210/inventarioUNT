import { React, useEffect, useState } from 'react';
import TitlePage from '../components/TitlePage'
import Table from '../components/Table'

import { TbDeviceDesktopPlus } from "react-icons/tb";

import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import ModalButton from '../components/ModalButton';
import DeviceRegistrationForm from '../components/DeviceRegistrationForm';
import NoRegisterBanner from '../components/NoRegisterBanner';
import axios from 'axios';

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api";

const Devices = () => {

  const headers = [
    { key: 'id', label: 'ID', tooltip: "" },
    { key: 'tipoId', label: 'Tipo', tooltip: "" },
    { key: 'estadoId', label: 'Estado', tooltip: "" },
    { key: 'ubicacion', label: 'Ubicacion', tooltip: "" },
    { key: 'habilitado', label: 'Habilitado', tooltip: "Condición de funcionamiento" },
    // { key: 'usuario', label: 'Usuario' },
    { key: 'fecha_ingreso', label: 'Fecha', tooltip: "", isDate: true },
    { key: 'color', label: 'Color', tooltip: "" },
    { key: 'marca', label: 'Marca', tooltip: "" },
    { key: 'modelo', label: 'Modelo', tooltip: "" },
    { key: 'serie', label: 'Serie', tooltip: "" },
    { key: 'dimensiones', label: 'Dimensiones (L x A x P)', tooltip: "" },
    { key: 'actions', label: 'Acciones', tooltip: "" }
  ];

  const { isOpen, openModal, closeModal } = useModal(); //estados del modal
  const [deviceData, setDeviceData] = useState([]); // Estado para los datos de usuarios
  const [tipoMap, setTipoMap] = useState({});
  const [estadoMap, setEstadoMap] = useState({});
  const [loading, setLoading] = useState(true);

  // Función para cargar datos y transformar datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Carga de dispositivos, tipos y estados
        const [devicesRes, tiposRes, estadosRes] = await Promise.all([
          axios.get(`${endpoint}/dispositivos`),
          axios.get(`${endpoint}/tipos`),
          axios.get(`${endpoint}/estados`),
        ]);

        // Crear mapas de tipoId y estadoId
        const tipos = tiposRes.data.reduce((acc, tipo) => {
          acc[tipo.id] = tipo.descripcion;
          return acc;
        }, {});

        const estados = estadosRes.data.reduce((acc, estado) => {
          acc[estado.id] = estado.descripcion;
          return acc;
        }, {});

        setTipoMap(tipos);
        setEstadoMap(estados);

        // Transformar datos de dispositivos
        const transformedData = devicesRes.data.map((device) => ({
          ...device,
          tipoId: tipos[device.tipoId] || `Tipo desconocido (${device.tipoId})`,
          estadoId: estados[device.estadoId] || `Estado desconocido (${device.estadoId})`,
          habilitado: device.habilitado ? "Habilitado" : "De baja", // Transformación de habilitado
          ubicacion: device.ubicacion || "No registrado",
          fecha_ingreso: device.fecha_ingreso || "No registrado",
          color: device.color || "No registrado",
          marca: device.marca || "No registrado",
          modelo: device.modelo || "No registrado",
          serie: device.serie || "No registrado",
          dimensiones: `${device.dimensionLargo || 'N/A'} x ${device.dimensionAlto || 'N/A'} x ${device.dimensionProfundidad || 'N/A'}`,
        }));

        setDeviceData(transformedData);
        console.log(transformedData)
      } catch (error) {
        console.error('Error al cargar datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Animación de carga
  if (loading) {
    return <p>Cargando datos...</p>;
  }

  const handleEdit = async (device) => {
    console.log("Editar dispositivo:", device);
    //setTitleModal("Editar dispositivo");
    openModal(); //modal con el formulario de edición
  };

  const handleDelete = async (device) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar el dispositivo ${device.id}?`);
    if (confirmDelete) {
      try {
        await axios.delete(`${endpoint}/dispositivo/${device.id}`);
        setDeviceData((prevData) => prevData.filter((d) => d.id !== device.id));
        alert("Dispositivo eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar el dispositivo:", error);
        alert("No se pudo eliminar el dispositivo");
      }
    }
  };

  const handleDeviceRegistration = (newDevice) => {
    // Cerrar el modal
    closeModal();
    
    // Agregar el nuevo dispositivo a la lista de dispositivos
    setDeviceData((prevData) => [
      ...prevData,
      {
        ...newDevice, 
        tipoId: tipoMap[newDevice.tipoId] || `Tipo desconocido (${newDevice.tipoId})`,
        estadoId: estadoMap[newDevice.estadoId] || `Estado desconocido (${newDevice.estadoId})`,
        habilitado: newDevice.habilitado ? "Habilitado" : "De baja",
        ubicacion: newDevice.ubicacion || "No registrado",
        fecha_ingreso: newDevice.fecha_ingreso || "No registrado",
        color: newDevice.color || "No registrado",
        marca: newDevice.marca || "No registrado",
        modelo: newDevice.modelo || "No registrado",
        serie: newDevice.serie || "No registrado",
        dimensiones: `${newDevice.dimensionLargo || 'N/A'} x ${newDevice.dimensionAlto || 'N/A'} x ${newDevice.dimensionProfundidad || 'N/A'}`,
      }
    ]);
  };

  return (
    <div>

      <TitlePage title="Dispositivos" />

      <div className='mt-5'>
        <ModalButton onClick={openModal}>
          <div className='flex font-semibold'>
            Nuevo <span className='ml-2'> <TbDeviceDesktopPlus size={22} /> </span>
          </div>
        </ModalButton>
      </div>

      {(deviceData.length > 0) ? (
        <div className='mt-5'>
          <Table headers={headers} data={deviceData} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      ) : (
        <NoRegisterBanner>
          Ningún registro agregado.
        </NoRegisterBanner>
      )
      }

      <div className="registrationModal">

        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold text-center w-full mb-3"> Registrar dispositivo </h2>
          {/* <h2 className="text-lg font-bold text-center w-full mb-3"> {titleModal} </h2> */}

          <DeviceRegistrationForm onClose={handleDeviceRegistration} />
        </Modal>

      </div>

    </div>
  )
}

export default Devices