// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import AnimalManagement from './Pages/AnimalManagement';
import ProductionControl from './Pages/ProductionControl';
import MedicalHistory from './Pages/MedicalHistory';
import Reports from './Pages/Reports';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/animal-management" element={<AnimalManagement />} />
        <Route path="/animal-management" element={<AnimalManagement />} />
        <Route path="/production-control" element={<ProductionControl />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default App;
