/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Navbar from './Navbar';

const MedicalHistoryForm = ({ onSubmit }) => {
  const [animalId, setAnimalId] = useState('');
  const [vaccinationDate, setVaccinationDate] = useState('');
  const [treatment, setTreatment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ animalId, vaccinationDate, treatment });
    setAnimalId('');
    setVaccinationDate('');
    setTreatment('');
  };
  
  return (
    <form className="MedicalHistoryForm" onSubmit={handleSubmit}>
      <input type="number" placeholder="ID del Animal" value={animalId} onChange={(e) => setAnimalId(e.target.value)} required />
      <input type="date" value={vaccinationDate} onChange={(e) => setVaccinationDate(e.target.value)} required />
      <textarea value={treatment} onChange={(e) => setTreatment(e.target.value)} required />
      <br />
      <button type="submit">Registrar Historial Médico</button>
    </form>
  );
};

export default MedicalHistoryForm;