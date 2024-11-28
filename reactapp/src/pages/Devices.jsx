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

  // const headers = [
  //   // { label: '', isCheckbox: true },
  //   { label: 'ID', key: 'id' },
  //   { label: 'Tipo', key: 'tipo' },
  //   { label: 'Marca', key: 'marca' },
  //   { label: 'Modelo', key: 'modelo' },
  //   { label: 'Serie', key: 'serie' },
  //   { label: 'Color', key: 'color' },
  //   { label: 'Ubicacion', key: 'ubicacion' },
  //   { label: 'Estado', key: 'estado' },
  //   { label: 'Habilitado', key: 'habilitado' },
  //   { label: 'Usuario', key: 'userId' },
  //   { label: 'Fecha', key: 'created_at' },
  // ];

  const headers = [
    { key: 'id', label: 'Id' },
    { key: 'tipoId', label: 'Tipo' },
    // { key: 'estado', label: 'Estado' },
    { key: 'ubicacion', label: 'Ubicacion' },
    // { key: 'habilitado', label: 'Habilitado' },
    // { key: 'usuario', label: 'Usuario' },
    { key: 'fecha_ingreso', label: 'Fecha' },

    // { key: 'color', label: 'Color' },
    // { key: 'marca', label: 'Marca' },
    // { key: 'modelo', label: 'Modelo' },
    // { key: 'serie', label: 'Serie' },

    { key: 'detalles', label: 'Mas detalles' },
    { key: 'acciones', label: 'Acciones' }
  ];
  

  // const data = [
  //   { id: '001', tipo: 'Laptop', marca: 'Dell', modelo: 'XPS', serie: '12345', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno', created_at: '01/01/2024', habilitado: '1', userId: 'Juan' },
  //   { id: '002', tipo: 'Router', marca: 'Cisco', modelo: 'RV340', serie: '67890', color: 'Gris', ubicacion: 'Sala de redes', estado: 'Regular', created_at: '02/02/2024', habilitado: '0', userId: 'Ana' },
  //   // Más filas...
  // ];

  // const deviceData1 = [
  //   { id: '001', tipo: 'Router', estado: 'Nuevo', ubicacion: 'Centro de datos', habilitado: 'Sí', usuario: 'Carlos', fecha: '01/01/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '002', tipo: 'Switch', estado: 'Usado', ubicacion: 'Sala de servidores', habilitado: 'Sí', usuario: 'Ana', fecha: '02/02/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '003', tipo: 'Laptop', estado: 'Nuevo', ubicacion: 'Oficina', habilitado: 'Sí', usuario: 'Luis', fecha: '03/03/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '004', tipo: 'Servidor', estado: 'Nuevo', ubicacion: 'Centro de datos', habilitado: 'Sí', usuario: 'María', fecha: '04/04/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '005', tipo: 'Access Point', estado: 'Usado', ubicacion: 'Sala de reuniones', habilitado: 'Sí', usuario: 'Jorge', fecha: '05/05/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '006', tipo: 'Desktop', estado: 'Reparado', ubicacion: 'Oficina', habilitado: 'Sí', usuario: 'Sofía', fecha: '06/06/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '007', tipo: 'Laptop', estado: 'Nuevo', ubicacion: 'Laboratorio', habilitado: 'Sí', usuario: 'Andrés', fecha: '07/07/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '008', tipo: 'Firewall', estado: 'Usado', ubicacion: 'Centro de datos', habilitado: 'Sí', usuario: 'Lucía', fecha: '08/08/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '009', tipo: 'Servidor', estado: 'Nuevo', ubicacion: 'Sala de servidores', habilitado: 'Sí', usuario: 'Miguel', fecha: '09/09/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
  //   { id: '010', tipo: 'Monitor', estado: 'Reparado', ubicacion: 'Oficina', habilitado: 'Sí', usuario: 'Carmen', fecha: '10/10/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' }
  // ];

  const deviceData1 = [
    { id: '001', tipo: 'Router', ubicacion: 'Centro de datos', habilitado: 'Sí', fecha: '01/01/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '002', tipo: 'Switch', ubicacion: 'Sala de servidores', habilitado: 'Sí', fecha: '02/02/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '003', tipo: 'Laptop', ubicacion: 'Oficina', habilitado: 'Sí', fecha: '03/03/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '004', tipo: 'Servidor', ubicacion: 'Centro de datos', habilitado: 'Sí', fecha: '04/04/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '005', tipo: 'Access Point', ubicacion: 'Sala de reuniones', habilitado: 'Sí', fecha: '05/05/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '006', tipo: 'Desktop', ubicacion: 'Oficina', habilitado: 'Sí', fecha: '06/06/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '007', tipo: 'Laptop', ubicacion: 'Laboratorio', habilitado: 'Sí', fecha: '07/07/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '008', tipo: 'Firewall', ubicacion: 'Centro de datos', habilitado: 'Sí', fecha: '08/08/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '009', tipo: 'Servidor', ubicacion: 'Sala de servidores', habilitado: 'Sí', fecha: '09/09/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' },
    { id: '010', tipo: 'Monitor', ubicacion: 'Oficina', habilitado: 'Sí', fecha: '10/10/2024', masDetalles: 'Detalles...', acciones: 'Editar | Eliminar' }
  ];
  
  

  const { isOpen, openModal, closeModal } = useModal(); //estados del modal

  const [deviceData, setDeviceData] = useState([]); // Estado para los datos de usuarios
  
  useEffect(() => {
    getAllDevices();
  }, []);

  const getAllDevices = async () => {
    try {
      const response = await axios.get(`${endpoint}/dispositivos`);
      setDeviceData(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error('Error al obtener registros:', error);
    }
  }

  const handleUserRegistration = () => {
    // Cerrar el modal y actualizar la lista de usuarios
    closeModal();
    getAllDevices(); // Obtener los usuarios después de agregar uno nuevo
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
            <Table headers={headers} data={deviceData} />
          </div>
        ) : (
          <NoRegisterBanner>
            Ningún registro agregado.
          </NoRegisterBanner>
        )
      }


      <div className="registrationModal">

        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold text-center w-full"> Registrar dispositivo </h2>

          <DeviceRegistrationForm onClose={closeModal}/>
        </Modal>
      </div>

    </div>
  )
}

export default Devices