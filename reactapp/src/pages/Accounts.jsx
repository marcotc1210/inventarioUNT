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
  const userHeaders = [
    { label: 'ID', key: 'id' },
    { label: 'DNI', key: 'document' },
    { label: 'Nombre', key: 'name' },
    { label: 'Apellido P.', key: 'lastname1' },
    { label: 'Apellido M.', key: 'lastname2' },
    { label: 'Correo', key: 'email' },
    { label: 'Acciones', key: 'actions' },
    // { label: 'Fecha de registro', key: 'created_at' }
  ];

  const { isOpen, openModal, closeModal } = useModal();

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${endpoint}/usuarios`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }

  const handleUserRegistration = () => {
    // Cerrar el modal y actualizar la lista de usuarios
    closeModal();
    getAllUsers(); // Obtener los usuarios después de agregar uno nuevo
  };

  const handleEdit = async (user) => {
    console.log("Editar usuario:", user);
    //setTitleModal("Editar dispositivo");
    openModal(); //modal con el formulario de edición
  };

  const handleDelete = async (user) => {
    const confirmDelete = window.confirm(`¿Estás seguro de eliminar al usuario ${user.id}?`);
    if (confirmDelete) {
      try {
        await axios.delete(`${endpoint}/usuario/${user.id}`);
        setUserData((prevData) => prevData.filter((d) => d.id !== user.id));
        alert("Usuario eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        alert("No se pudo eliminar el usuario");
      }
    }
  };

  return (
    <div>
      <TitlePage title="Cuentas de usuario" />

      <div className='mt-5'>
        <ModalButton onClick={openModal}>
          <div className='flex font-semibold'>
            Nuevo <span className='ml-2'> <TbUserPlus size={22} /> </span>
          </div>
        </ModalButton>
      </div>

      {userData.length > 0 ? (
        <div className='mt-5'>
          <Table headers={userHeaders} data={userData} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      ) : (
        <NoRegisterBanner>Ningún registro agregado.</NoRegisterBanner>
      )}

      <div className="registrationModal">
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold text-center w-full">Registrar usuario</h2>
          <UserRegistrationForm onClose={handleUserRegistration} />
        </Modal>
      </div>
    </div>
  );
};

export default Accounts;
