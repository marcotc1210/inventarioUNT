import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FiSettings, FiUsers, FiPieChart, FiLogOut, FiHelpCircle, FiAirplay, FiPrinter, FiTool, FiUser  } from "react-icons/fi";


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(false);
  const handleLinkClick = (index)=>{
    setActiveLink(index)
  }

  const SIDEBAR_LINKS = [
    { id: 1, path: '/', name: 'Dashboard', icon: FiPieChart },
    { id: 2, path: '/devices', name: 'Dispositivos', icon: FiAirplay },
    { id: 3, path: '/accounts', name: 'Cuentas', icon: FiUsers },
    { id: 6, path: '/reports', name: 'Reportes', icon: FiPrinter },
    { id: 4, path: '/system', name: 'Ajustes del sistema', icon: FiTool },
    //{ id: 5, path: '/profile', name: 'Perfil', icon: FiSettings },
    // { id: 7, path: '/Ayuda', name: 'Ayuda', icon: FiHelpCircle },
    // { id: 8, path: '/Salir', name: 'Salir', icon: FiLogOut },
  ];

  return (
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
        </figure>

      </div>


      {/* Navigation Links */}
      <ul className='mt-6 space-y-4 '>
        {SIDEBAR_LINKS.map((link) => (
          <li key={link.id} className={`text-gray-800 font-bold rounded-md py-2 px-5 hover:bg-gray-300 hover:text-blue-800 ${activeLink == link.id ? 'bg-blue-800 text-white' : ''}`}>

            <Link to={link.path} className='flex justify-center md:justify-start items-center md:space-x-5' onClick={()=>handleLinkClick(link.id)}>
              <span >{React.createElement(link.icon)}</span>
              <span className='text-sm hidden md:flex'>{link.name}</span>
            </Link>

          </li>
        ))}
      </ul>

      <div className='w-full text-gray-800 absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center space-y-2'>

       <p className='flex items-center space-x-2 py-2 px-3 md:px-5 font-medium rounded-md hover:bg-gray-300 md:space-x-5 '>
          <span > <FiHelpCircle/> </span> 
          <span className='text-sm hidden md:flex'> Ayuda al usuario</span>
        </p>    

        <p className='font-medium rounded-md py-2 px-3 md:px-5 hover:bg-gray-300 flex items-center md:space-x-5'>
          <span > <FiLogOut/> </span>
          <span className='text-sm hidden md:flex'> Salir</span>
        </p>    


      </div>

    </div>
  );
}

export default Sidebar;
