import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import Write from "./pages/Write.jsx";
import AdminDashboard from "./adminpages/AdminDashboard.jsx";
import { getTokenFromCookie } from "./service/TokenService.jsx";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);


const { token } = getTokenFromCookie();

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="single" element={<Single />} />
          <Route path="write" element={<Write />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Layout>
    ),
  },
  {
    path: "/admin",
    element: token ? <AdminDashboard /> : <Login />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
