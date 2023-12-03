

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

const AdminLayout = ({ children }) => (
  <>
    <Navbar />
     {children}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <AdminLayout>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </AdminLayout>
    ),
  },

]);


const AdminDashboard = () => {
  return (
    <>
      <AdminLayout/>
    </>

  )
}

export default AdminDashboard;