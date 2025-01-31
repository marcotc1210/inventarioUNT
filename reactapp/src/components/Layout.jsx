import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div >
      <div className='flex'>
        <Sidebar/>
        <div className='w-full ml-16 lg:ml-56'>
          <Header/>
          <div className="mx-5 my-3 lg:mx-10 md:my-5">
            <Outlet  />
          </div>
          
        </div>
        
      </div>

    </div>
  );
};

export default Layout;