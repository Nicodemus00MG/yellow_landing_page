import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inicio from "./Inicio";
import Servicios from "./Servicios";
import Noticias from "./Noticias";
import Contacto from "./Contacto";
import "../styles/navbarStyles.css"
const Navbar = () => {
  return (
    <Router>
      <div>
        <nav className="navBarYellow">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/noticias">Noticias</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
