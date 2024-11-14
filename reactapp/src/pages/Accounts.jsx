import {React, useEffect, useState} from 'react'
import TitlePage from '../components/TitlePage'
import Table from '../components/Table'

import { TbUserPlus } from "react-icons/tb";
import ModalButton from '../components/ModalButton';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import UserRegistrationForm from '../components/UserRegistrationForm';

import axios from 'axios';


const endpoint = "hhtp://localhost:8000/api";

const Accounts = () => {

  const userHeaders = [
    { label: '', isCheckbox: true },
    { label: 'DNI' },
    { label: 'Nombre' },
    { label: 'Correo' },
    { label: 'Rol' },
    { label: 'Estado' },
    { label: 'Fecha' }
  ];
  
  // const userData = [
  //   { dni: 'U045401', nombre: 'Juan Pérez', correo: 'juan.perez@example.com', rol: 'Administrador', estado: 'Activo', fecha: '2024-01-15' },
  //   { dni: 'U045602', nombre: 'Ana Gómez', correo: 'ana.gomez@example.com', rol: 'Usuario', estado: 'Inactivo', fecha: '2024-02-20' },
  //   { dni: 'U004563', nombre: 'Luis Martínez', correo: 'luis.martinez@example.com', rol: 'Moderador', estado: 'Activo', fecha: '2024-03-12' },
  //   { dni: 'U045604', nombre: 'María Rodríguez', correo: 'maria.rodriguez@example.com', rol: 'Usuario', estado: 'Activo', fecha: '2024-04-07' },
  //   { dni: 'U045605', nombre: 'Carlos López', correo: 'carlos.lopez@example.com', rol: 'Administrador', estado: 'Activo', fecha: '2024-05-18' },
  //   { dni: 'U045606', nombre: 'Lucía Fernández', correo: 'lucia.fernandez@example.com', rol: 'Usuario', estado: 'Inactivo', fecha: '2024-06-09' },
  //   { dni: 'U004567', nombre: 'Miguel Sánchez', correo: 'miguel.sanchez@example.com', rol: 'Moderador', estado: 'Activo', fecha: '2024-07-21' },
  //   { dni: 'U004568', nombre: 'Laura Castillo', correo: 'laura.castillo@example.com', rol: 'Usuario', estado: 'Activo', fecha: '2024-08-14' },
  //   { dni: 'U045609', nombre: 'Pedro Ramírez', correo: 'pedro.ramirez@example.com', rol: 'Usuario', estado: 'Inactivo', fecha: '2024-09-01' },
  //   { dni: 'U014560', nombre: 'Sofía Torres', correo: 'sofia.torres@example.com', rol: 'Administrador', estado: 'Activo', fecha: '2024-10-30' }
  // ];

  const [userData, setUserData] = useState([]); // Estado para los datos de usuarios

  const { isOpen, openModal, closeModal } = useModal(); //estados del modal
  
  useEffect( () => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${endpoint}/productos`);
    setUserData(response);
  }


  return (
    <div>
      <TitlePage title="Cuentas de usuario" />

      
      <div className='mt-5'>
        <ModalButton onClick={openModal}> 
          <div className='flex font-semibold'>
              Nuevo <span className='ml-2'> <TbUserPlus size={22} /> </span>
          </div>
        </ModalButton>

        <Table headers={userHeaders} data={userData} />

      </div>
    
      <div className="registrationModal">
  
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold text-center w-full"> Registrar usuario </h2>
          
          <UserRegistrationForm/>
          
        </Modal>

      </div>

    </div>
  )
}

export default Accounts