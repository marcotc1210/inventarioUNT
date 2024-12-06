import { React, useEffect, useState } from 'react';
import TitlePage from '../components/TitlePage'
import Table from '../components/Table'

import { TbDeviceDesktopPlus } from "react-icons/tb";

import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import ModalButton from '../components/ModalButton';
import DeviceRegistrationForm from '../components/DeviceRegistrationForm';
import DeviceEditForm from '../components/DeviceEditForm';
import NoRegisterBanner from '../components/NoRegisterBanner';
import axios from 'axios';

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api";

const Devices = () => {

  const headers = [
    { key: 'id', label: 'ID', tooltip: "" },
    { key: 'tipoId', label: 'Tipo', tooltip: "" },
    { key: 'estadoId', label: 'Estado', tooltip: "" },
    { key: 'ubicacion', label: 'Ubicación', tooltip: "" },
    { key: 'habilitado', label: 'Habilitado', tooltip: "" },
    // { key: 'usuario', label: 'Usuario' },
    { key: 'fecha_ingreso', label: 'Fecha', tooltip: "", isDate: true },
    { key: 'color', label: 'Color', tooltip: "" },
    { key: 'marca', label: 'Marca', tooltip: "" },
    { key: 'modelo', label: 'Modelo', tooltip: "" },
    { key: 'serie', label: 'Serie', tooltip: "" },
    { key: 'dimensiones', label: 'Dimension (L x A x P)', tooltip: "" },
    { key: 'actions', label: 'Acciones', tooltip: "" }
  ];

  const {isOpen, openModal, closeModal } = useModal(); //estados del modal
  const [modalEdit, setModalEdit] = useState(false); // Estado para definir el tipo de modal (registro o edición)
  const [currentDevice, setCurrentDevice] = useState(null); // Estado para almacenar el dispositivo que se va a editar
  const [deviceData, setDeviceData] = useState([]); // Estado para los datos de dispositivos
  const [loading, setLoading] = useState(true);

  // Función para cargar datos
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Carga de dispositivos, tipos y estados
  //       const [devicesRes, tiposRes, estadosRes] = await Promise.all([
  //         axios.get(`${endpoint}/dispositivos`),
  //         axios.get(`${endpoint}/tipos`),
  //         axios.get(`${endpoint}/estados`),
  //       ]);

  //       setDeviceData(devicesRes.data);
  //       // console.log(devicesRes);
  //     } catch (error) {
  //       console.error('Error al cargar datos:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Carga de dispositivos, tipos y estados
      const devicesRes = await axios.get(`${endpoint}/dispositivos`);
      setDeviceData(devicesRes.data);
      // console.log(devicesRes);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    } finally {
      setLoading(false);
    }
  }

  // Animación de carga
  if (loading) {
    return <p>Cargando datos...</p>;
  }

  const handleEdit = (device) => {
    setCurrentDevice(device); // Establecer el dispositivo que se va a editar
    setModalEdit(true); // Cambiar el tipo de modal a "edit"
    openModal(); // Abrir el modal
  };

  const handleDelete = async (deviceId) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar el dispositivo?`);
    if (confirmDelete) {
      try {
        await axios.delete(`${endpoint}/dispositivo/${deviceId}`);
        setDeviceData((prevData) => prevData.filter((d) => d.id !== deviceId));
        alert("Dispositivo eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar el dispositivo:", error);
        alert("No se pudo eliminar el dispositivo");
      }
    }
  };

  // Para cerrar el modal, reiniciamos el estado de edición y dispositivo
  const handleCloseModal = (onClose) => {
    setModalEdit(false);
    setCurrentDevice(null); // Limpiamos el dispositivo que se estaba editando
    closeModal(onClose);
  };

  const handleDeviceRegistration = () => {
    // Cerrar el modal y actualizar la lista de usuarios
    closeModal();
    fetchData(); // Obtener los usuarios después de agregar uno nuevo
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

      <div className="modalWindow">

        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold text-center w-full mb-3">
            {modalEdit == false ? 'Registrar dispositivo' : 'Editar dispositivo'}
          </h2>

          {modalEdit == false ? (
            <DeviceRegistrationForm onClose={handleDeviceRegistration} />
          ) : (
            <DeviceEditForm device={currentDevice} onClose={handleCloseModal} />
          )}
        </Modal>

      </div>

    </div>
  )
}

export default Devices