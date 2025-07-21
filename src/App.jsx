import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Formation from "./pages/Formation";
import Contact from "./pages/contact";
// Tu peux aussi importer Navbar et Footer ici si tu veux les afficher globalement

function App() {
  return (
    <>
      {/* Si tu veux afficher la navbar sur toutes les pages, décommente la ligne ci-dessous */}
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Tu peux ajouter <Footer /> ici si tu veux qu’il soit visible partout */}
    </>
  );
}

export default App;

