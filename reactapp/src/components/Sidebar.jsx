<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FiSettings, FiUsers, FiPieChart, FiLogOut, FiHelpCircle, FiAirplay, FiPrinter, FiTool, FiUser } from "react-icons/fi";
=======
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FiSettings, FiUsers, FiPieChart, FiLogOut, FiHelpCircle, FiAirplay, FiPrinter, FiTool, FiUser  } from "react-icons/fi";
>>>>>>> api


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(false);
<<<<<<< HEAD
  const handleLinkClick = (index) => {
=======
  const handleLinkClick = (index)=>{
>>>>>>> api
    setActiveLink(index)
  }

  const SIDEBAR_LINKS = [
    { id: 1, path: '/', name: 'Dashboard', icon: FiPieChart },
    { id: 2, path: '/devices', name: 'Dispositivos', icon: FiAirplay },
    { id: 3, path: '/accounts', name: 'Cuentas', icon: FiUsers },
    // { id: 6, path: '/reports', name: 'Reportes', icon: FiPrinter },
    { id: 4, path: '/system', name: 'Ajustes del sistema', icon: FiTool },
    //{ id: 5, path: '/profile', name: 'Perfil', icon: FiSettings },
    // { id: 7, path: '/Ayuda', name: 'Ayuda', icon: FiHelpCircle },
    // { id: 8, path: '/Salir', name: 'Salir', icon: FiLogOut },
  ];

  return (
<<<<<<< HEAD
    <div className='w-16 lg:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-2 bg-gray-200 rounded-r-2xl'>

      {/* Logo */}
      <div className='h-10 flex lg:h-20'>

        {/* Logo completo solo en pantallas grandes */}
        <div className='w-13 items-center hidden lg:flex'>
          <figure>
            <img src="images/logo-unt.png" alt="logo" />
          </figure>
          <span className='text-sm font-bold text-center text-gray-800 uppercase'>Inventario dispositivos FACEDU</span>
        </div>

        {/* Logo reducido en pantallas pequeñas */}
        <figure className='w-full flex justify-center lg:hidden'>
          <img className='h-8' src="images/logo-unt.png" alt="logo" />
=======
    <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-gray-200 rounded-r-2xl'>
      {/* Logo */}
      {/* <div className='flex h-[14.3%]'> */}
      <div className='flex h-20'>
        <figure className='w-28 hidden md:flex pr-4 items-center'>
          <img src="/logo_UNT.png" alt="logo" />
          <span className='text-sm font-bold text-center text-gray-800 uppercase'> Inventario dispositivos FACEDU </span>
        </figure>
        <figure className='w-8 flex md:hidden'>
          <img src="/logo_unt_mini.png" alt="logo" />
>>>>>>> api
        </figure>

      </div>

<<<<<<< HEAD
      {/* Navigation Links */}
      <ul className='mt-10 lg:mt-15 space-y-3'>
        {SIDEBAR_LINKS.map((link) => (
          <li key={link.id} className={`text-gray-800 font-bold rounded-md py-2 px-3 hover:bg-gray-300 hover:text-blue-800 ${activeLink == link.id ? 'bg-blue-800 text-white' : ''}`}>
            <Link to={link.path} className='flex justify-center lg:justify-start items-center lg:space-x-3' onClick={() => handleLinkClick(link.id)}>
              <span className='flex justify-center'>{React.createElement(link.icon)}</span>
              <span className='text-sm hidden lg:flex'>{link.name}</span>
            </Link>
=======

      {/* Navigation Links */}
      <ul className='mt-6 space-y-4 '>
        {SIDEBAR_LINKS.map((link) => (
          <li key={link.id} className={`text-gray-800 font-bold rounded-md py-2 px-5 hover:bg-gray-300 hover:text-blue-800 ${activeLink == link.id ? 'bg-blue-800 text-white' : ''}`}>

            <Link to={link.path} className='flex justify-center md:justify-start items-center md:space-x-5' onClick={()=>handleLinkClick(link.id)}>
              <span >{React.createElement(link.icon)}</span>
              <span className='text-sm hidden md:flex'>{link.name}</span>
            </Link>

>>>>>>> api
          </li>
        ))}
      </ul>

<<<<<<< HEAD
      {/* Ayuda y Salir */}
      <div className='w-full text-gray-800 absolute bottom-5 left-0 py-2 cursor-pointer text-center space-y-2'>

        <p className='flex items-center justify-center lg:justify-start space-x-3 py-2 px-3 lg:px-5 font-bold rounded-md hover:bg-gray-300'>
          <span><FiHelpCircle /></span>
          <span className='text-sm hidden lg:flex'>Ayuda al usuario</span>
        </p>

        <p className='text-red-700 flex items-center justify-center font-bold rounded-md space-x-3 py-2 px-3 lg:px-5 hover:bg-gray-300  lg:justify-start'>
          <span><FiLogOut /></span>
          <span className='text-sm hidden lg:flex'>Salir</span>
        </p>
=======
      <div className='w-full text-gray-800 absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center space-y-2'>

       <p className='flex items-center space-x-2 py-2 px-3 md:px-5 font-medium rounded-md hover:bg-gray-300 md:space-x-5 '>
          <span > <FiHelpCircle/> </span> 
          <span className='text-sm hidden md:flex'> Ayuda al usuario</span>
        </p>    

        <p className='font-medium rounded-md py-2 px-3 md:px-5 hover:bg-gray-300 flex items-center md:space-x-5'>
          <span > <FiLogOut/> </span>
          <span className='text-sm hidden md:flex'> Salir</span>
        </p>    

>>>>>>> api

      </div>

    </div>
<<<<<<< HEAD

=======
>>>>>>> api
  );
}

export default Sidebar;
