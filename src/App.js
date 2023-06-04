import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import Techblogs from "./components/Techblogs";
import About from "./components/About";
import Contact from "./components/Contact";
import SearchItems  from "./components/SearchItems";
import AdminLayout from "./components/AdminLayout";
import UploadJob from "./components/Admin/UploadJob";
import UploadBlog from "./components/Admin/UploadBlog";
import Login from "./components/Admin/Login";
import Register from "./components/Admin/Register";
import Privacy from "./components/Privacy";
import NotFound from "./components/NotFound";
import Disclaimer from "./components/Disclaimer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="career/:title/*" element={<Job />} />
            <Route path="techblogs" element={<Techblogs/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="search" element={<SearchItems />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="admin" element={<AdminLayout/>} >
          <Route path="uploadjob" element={<UploadJob />}/>
          <Route path="uploadblog" element={<UploadBlog />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
  )
}

export default App