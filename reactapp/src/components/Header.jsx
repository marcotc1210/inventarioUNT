import React from 'react'
import { FiCalendar, FiMap, FiSun, FiMoon, FiGlobe } from "react-icons/fi";
import { IoLanguageSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <div>
        <h1 className='text-xs'> ¡Bienvenida de nuevo admin! </h1>
        <p className='text-xl font-semibold'> Lorena </p>
      </div>

      <div className='flex items-center space-x-5'>
        <div className='hidden md:flex'>
          <input type="text" placeholder='Search...' className='bg-blue-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-blue-600' />
        </div>

        <div className='flex items-center space-x-5'>
          <button className='relative text-2xl text-gray-600'>
            <FiGlobe size={22} />            
          </button>
          <button className='relative text-2xl text-gray-600'>
            <FiSun size={22} />            
          </button>
          <button className='relative text-2xl text-gray-600'>
            <FiMap size={22} />            
          </button>
          <button className='relative text-2xl text-gray-600'>
            <FiCalendar size={22} />            
          </button>
          <img className="w-9 h-9 rounded-xl border-2 border-blue-600" src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile_photo" />
        </div>

      </div>
    </div>
  )
}

export default Header