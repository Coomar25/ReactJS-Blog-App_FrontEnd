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
import Dashboard from "./adminpages/adminpages/Dashboard.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InnerNews from "./components/InnerNews/InnerNews.jsx";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    {/* <Footer /> */}
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
          <Route path="programming" element={<Single />} />
          <Route path="write" element={<Write />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/:tagsOrCategories/:slug" element={<InnerNews />} />
        </Routes>
      </Layout>
    ),
  },
  {
    path: "/admin",
    element: token ? <AdminDashboard /> : <Login />,
  },
  {
    path: "/visitadmindashboard",
    element: <Dashboard />,
  },
]);

const App = () => {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
      {/* {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE} */}
    </div>
  );
};

export default App;
