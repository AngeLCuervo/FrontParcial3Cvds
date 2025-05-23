import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import SpecialtyDetail from "./components/SpecialtyDetail.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
import AppointmentHistory from "./components/AppointmentHistory.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialty/:name" element={<SpecialtyDetail />} />
        <Route path="/appointment/:name" element={<AppointmentForm />} />
        <Route path="/history" element={<AppointmentHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
