import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FiSettings, FiUsers, FiPieChart, FiLogOut, FiHelpCircle, FiAirplay, FiPrinter, FiTool, FiUser } from "react-icons/fi";


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null); // Use null for initial state

  useEffect(() => {
    // Get the current path on component mount
    const currentPath = window.location.pathname;

    // Find the matching link based on path
    const matchingLink = SIDEBAR_LINKS.find(link => link.path === currentPath);

    // If a match is found, set activeLink
    if (matchingLink) {
      setActiveLink(matchingLink.id);
    }
  }, []); // Empty dependency array to run only once on mount

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

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
        </figure>

      </div>

      {/* Navigation Links */}
      <ul className='mt-10 lg:mt-15 space-y-3'>
        {SIDEBAR_LINKS.map((link) => (
          <li key={link.id} className={`text-gray-800 font-bold rounded-md py-2 px-3 hover:bg-gray-300 hover:text-blue-800 ${activeLink === link.id ? 'bg-blue-800 text-white' : ''}`}>
            <Link to={link.path} className='flex justify-center lg:justify-start items-center lg:space-x-3' onClick={() => handleLinkClick(link.id)}>
              <span className='flex justify-center'>{React.createElement(link.icon)}</span>
              <span className='text-sm hidden lg:flex'>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

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

      </div>

    </div>
  );
}

export default Sidebar;
