import React from 'react'
import TitlePage from '../components/TitlePage'
import Table from '../components/Table'

import { TbDeviceDesktopPlus } from "react-icons/tb";
import { useState } from 'react';

import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import ModalButton from '../components/ModalButton';
import DeviceRegistrationForm from '../components/DeviceRegistrationForm';
import NoRegisterBanner from '../components/NoRegisterBanner';


const Devices = () => {

  const headers = [
    // { label: '', isCheckbox: true },
    { label: 'ID', key: 'id' },
    { label: 'Tipo', key: 'tipo' },
    { label: 'Marca', key: 'marca' },
    { label: 'Modelo', key: 'modelo' },
    { label: 'Serie', key: 'serie' },
    { label: 'Color', key: 'color' },
    { label: 'Ubicacion', key: 'ubicacion' },
    { label: 'Estado', key: 'estado' },
    { label: 'Habilitado', key: 'habilitado' },
    { label: 'Usuario', key: 'userId' },
    { label: 'Fecha', key: 'created_at' },
  ];

  const data = [
    { id: '001', tipo: 'Laptop', marca: 'Dell', modelo: 'XPS', serie: '12345', color: 'Negro', ubicacion: 'Oficina', estado: 'Bueno', created_at: '01/01/2024', habilitado: '1', userId: 'Juan' },
    { id: '002', tipo: 'Router', marca: 'Cisco', modelo: 'RV340', serie: '67890', color: 'Gris', ubicacion: 'Sala de redes', estado: 'Regular', created_at: '02/02/2024', habilitado: '0', userId: 'Ana' },
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
      </div>


      {(data.length > 0) ? (
          <div className='mt-5'>
            <Table headers={headers} data={data} />
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