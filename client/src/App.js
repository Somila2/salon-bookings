import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/services" style={{ marginRight: "1rem" }}>Services</Link>
        <Link to="/booking">Booking</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
