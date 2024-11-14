import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div >
      <div className='flex'>
        <Sidebar/>
<<<<<<< HEAD
        <div className='w-full ml-16 lg:ml-56'>
          <Header/>
          <div className="mx-5 my-3 lg:mx-10 md:my-5">
=======
        <div className='w-full ml-16 md:ml-56'>
          <Header/>
          <div className="mx-5 my-3 md:mx-10 md:my-5">
>>>>>>> api
            <Outlet  />
          </div>
          
        </div>
        
      </div>

    </div>
  );
};

export default Layout;