import React from 'react'
<<<<<<< HEAD
import TitlePage from '../components/TitlePage'
import Table from '../components/Table'

import { TbDeviceDesktopPlus } from "react-icons/tb";
import { useState } from 'react';

import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import ModalButton from '../components/ModalButton';
import DeviceRegistrationForm from '../components/DeviceRegistrationForm';


const Devices = () => {

  const headers = [
    { label: '', isCheckbox: true },
    { label: 'ID' },
    { label: 'Tipo' },
    { label: 'Marca' },
    { label: 'Modelo' },
    { label: 'Serie' },
    { label: 'Color' },
    { label: 'Ubicacion' },
    { label: 'Estado' },
    { label: 'Registro' },
    { label: 'Estado' },
    { label: 'Usuario' }
  ];

  const data = [
    { id: '001', tipo: 'Laptop', marca: 'Dell', modelo: 'XPS', serie: '12345', color: 'Negro', ubicacion: 'Oficina', estado: 'Nuevo', registro: '01/01/2024', estadofinal: 'BUENO', usuario: 'Juan' },
    { id: '002', tipo: 'Router', marca: 'Cisco', modelo: 'RV340', serie: '67890', color: 'Gris', ubicacion: 'Sala de redes', estado: 'Usado', registro: '02/02/2024', estadofinal: 'REGULAR', usuario: 'Ana' },
    // Más filas...
  ];

  const { isOpen, openModal, closeModal } = useModal(); //estados del modal

  return (
    <div>

      <TitlePage title="Dispositivos" />

      <div className='mt-5'>
        <ModalButton onClick={openModal}>
          <div className='flex font-semibold'>
            Nuevo <span className='ml-2'> <TbDeviceDesktopPlus size={22} /> </span>
          </div>

        </ModalButton>

        <Table headers={headers} data={data} />
      </div>

      <div className="registrationModal">

        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold text-center w-full"> Registrar dispositivo </h2>

          <DeviceRegistrationForm />
        </Modal>
      </div>

=======
// import TableDevices1 from '../components/TableDevices1'
import TableDevices from '../components/TableDevices'
import TitlePage from '../components/TitlePage'
// import Table from '../components/Table'

const Devices = () => {
  return (
    <div>
      <TitlePage title="Dispositivos" />
      <div>
        {/* <TableDevices1/> */}
        <TableDevices/>
      </div>
      
>>>>>>> api
    </div>
  )
}

export default Devices