import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Regsiter from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import Write from "./pages/Write.jsx";
import Register from "./pages/Register.jsx";
import AdminDashboard from "./adminpages/AdminDashboard.jsx"
import JoditEditorBlog from "./pages/JoditEditorBlog.jsx";

const Layout = () => (
  <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/single" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    <Footer />
  </>
);

// const AdminLayout = () => (
//   <>
//         <Route path="/admin" element={<Home />} />
//         <Route path="/post/:id" element={<Single />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/write" element={<Write />} />
//         <Route path="/single" element={<Single />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//   </>
// );



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },

      {
        path: "/write",
        element: <Write />,
      },

      {
        path: "/single",
        element: <Single />,
      },

      {
        path: "register",
        element: <Regsiter />,
      },
    
      {
        path: "login",
        element: <Login />,
      },

    ],
  },
  
  {
    path: "admin",
    element: <AdminDashboard />,
  },

  // {
  //   path:"/admin",
  //   element: <AdminLayout/>,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },
  //     {
  //       path: "/post/:id",
  //       element: <Single />,
  //     },

  //     {
  //       path: "/write",
  //       element: <Write />,
  //     },

  //     {
  //       path: "/single",
  //       element: <Single />,
  //     },

  //     {
  //       path: "register",
  //       element: <Regsiter />,
  //     },
    
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //   ]
  // }


]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
