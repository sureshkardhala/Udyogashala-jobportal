import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import Techblogs from "./components/Techblogs";
import About from "./components/About";
import Contact from "./components/Contact";
import SearchItems from "./components/SearchItems";
import AdminLayout from "./components/AdminLayout";
import Login from "./components/Admin/Login";
import Register from "./components/Admin/Register";
import Privacy from "./components/Privacy";
import NotFound from "./components/NotFound";
import Disclaimer from "./components/Disclaimer";
import Blog from "./components/Blog";
import Upload from "./components/Admin/Upload";
import Update from "./components/Admin/Update";
import AdminHome from "./components/Admin/AdminHome";

const App = () => {
  const routes = [
    {
      id: 1,
      element: <Home />,
      path: "home",
    },
    {
      id: 2,
      element: <Jobs />,
      path: "jobs",
    },
    {
      id: 3,
      element: <Job />,
      path: "job/:title",
    },
    {
      id: 4,
      element: <Techblogs />,
      path: "blogs",
    },
    {
      id: 5,
      element: <Blog />,
      path: "blog/:title",
    },
    {
      id: 6,
      element: <About />,
      path: "about",
    },
    {
      id: 7,
      element: <Contact />,
      path: "contact",
    },
    {
      id: 8,
      element: <SearchItems />,
      path: "search",
    },
    {
      id: 9,
      element: <Privacy />,
      path: "privacy",
    },
    {
      id: 10,
      element: <Disclaimer />,
      path: "disclaimer",
    },
    {
      id: 11,
      element: <NotFound />,
      path: "*",
    },
  ];
  const adminRoutes = [
    {
      id: 1,
      element: <Login />,
      path: "login",
    },
    {
      id: 2,
      element: <Register />,
      path: "register",
    },
    {
      id: 3,
      element: <AdminHome />,
      path: "home",
    },
    {
      id: 4,
      element: <Upload/>,
      path: "upload/:name",
    },
    {
      id:5,
      element: <Update />,
      path: "update/:name/:id"
    }
    
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {routes.map(({ id, element, path }) => (
            <Route path={path} element={element} key={id} />
          ))}
          
        </Route>
        <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            {adminRoutes.map(({ id, element, path }) => (
              <Route path={path} element={element} key={id} />
            ))}
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
