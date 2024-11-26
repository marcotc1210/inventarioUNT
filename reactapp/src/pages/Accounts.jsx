import { React, useEffect, useState } from 'react';
import TitlePage from '../components/TitlePage';
import Table from '../components/Table';
import { TbUserPlus } from 'react-icons/tb';
import ModalButton from '../components/ModalButton';
import useModal from '../hooks/useModal';
import Modal from '../components/Modal';
import UserRegistrationForm from '../components/UserRegistrationForm';
import axios from 'axios';
import NoRegisterBanner from '../components/NoRegisterBanner';

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api";

const Accounts = () => {

  const userHeaders = [  //la clave de cada label permite asociar los valores de la respuesta del servidor
    // { label: '', isCheckbox: true },
    { label: 'ID', key: 'id' },
    { label: 'Documento', key: 'document' },
    { label: 'Nombre', key: 'name' },
    { label: 'Apellido M.', key: 'lastname1' },
    { label: 'Apellido P.', key: 'lastname2' },
    { label: 'Correo', key: 'email' },
    // { label: 'Rol' },
    // { label: 'Estado' },
    { label: 'Fecha de registro', key: 'created_at' }
  ];

  const [userData, setUserData] = useState([]); // Estado para los datos de usuarios

  const { isOpen, openModal, closeModal } = useModal(); // Estados del modal

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${endpoint}/usuarios`);
      setUserData(response.data); // Asignar correctamente los datos de la respuesta
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }

  return (
    <div>
      <TitlePage title="Cuentas de usuario" />

      {/* Prueba del response */}
      {/* <div>
        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.document}</td>
            <td>{user.name}</td>
          </tr>
        ))}
      </div> */}

      <div className='mt-5'>
        <ModalButton onClick={openModal}>
          <div className='flex font-semibold'>
            Nuevo <span className='ml-2'> <TbUserPlus size={22} /> </span>
          </div>
        </ModalButton>
      </div>

      {(userData.length > 0) ? (
          <div className='mt-5'>
            <Table headers={userHeaders} data={userData} />
          </div>
        ) : (
          <NoRegisterBanner>
            Ningún registro agregado.
          </NoRegisterBanner>
        )
      }
      
      <div className="registrationModal">
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold text-center w-full"> Registrar usuario </h2>
          <UserRegistrationForm onClose={closeModal} />
        </Modal>
      </div>
    </div>
  );
}

export default Accounts;
