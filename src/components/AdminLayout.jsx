import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Admin/Navbar';

const AdminLayout = () => {

  return (
    <div>
         <Navbar />
        <Outlet />
    </div>
  )
}

export default AdminLayout