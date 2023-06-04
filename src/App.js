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
import UploadJob from "./components/Admin/UploadJob";
import UploadBlog from "./components/Admin/UploadBlog";
import Login from "./components/Admin/Login";
import Register from "./components/Admin/Register";
import Privacy from "./components/Privacy";
import NotFound from "./components/NotFound";
import Disclaimer from "./components/Disclaimer";

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
      path: "career/:title/*",
    },
    {
      id: 4,
      element: <Techblogs />,
      path: "techblogs",
    },
    {
      id: 5,
      element: <About />,
      path: "about",
    },
    {
      id: 6,
      element: <Contact />,
      path: "contact",
    },
    {
      id: 7,
      element: <SearchItems />,
      path: "search",
    },
    {
      id: 8,
      element: <Privacy />,
      path: "privacy",
    },
    {
      id: 9,
      element: <Disclaimer />,
      path: "disclaimer",
    },
    {
      id: 10,
      element: <NotFound />,
      path: "*",
    },
  ];
  const adminRoutes = [
    {
      id: 1,
      element: <UploadJob />,
      path: "uploadjob",
    },
    {
      id: 2,
      element: <UploadBlog />,
      path: "uploadblog",
    },
    {
      id: 3,
      element: <Login />,
      path: "login",
    },
    {
      id: 1,
      element: <Register />,
      path: "register",
    },
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
            {adminRoutes.map(({ id, element, path }) => (
              <Route path={path} element={element} key={id} />
            ))}
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
