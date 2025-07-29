import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Formation from "./pages/Formation";
import Contact from "./pages/contact";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/formation" element={<Formation />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

