import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
