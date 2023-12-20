

import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Write from '../pages/Write';
import Dashboard from './adminpages/Dashboard';
import Home from '../pages/Home';

const AdminLayout = ({ children }) => (
  <>
    <Navbar />
     <Home/>
     {children}
    <Footer />
  </>
);


const AdminDashboard = () => {
  return (
    <>
      <AdminLayout/>
    </>

  )
}

export default AdminDashboard;