import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./App";
import AboutPage from "./MovieFinder";



function DI() {
  return (
    <div className="login-page">

    <BrowserRouter>
      <nav className="nav1">
        <Link style={{color:"yellow"}} to="/">Пойск по фото</Link>  <Link style={{color:"darkturquoise"}} to="/about"> Пойск по запросу</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>




    </div>
  );
}
export default DI;