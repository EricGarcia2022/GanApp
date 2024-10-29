import React, { useState, useEffect } from 'react';
import MedicalHistoryForm from '../Componentes/MedicalHistoryForm';
import { fetchMedicalHistory, addMedicalRecord } from '../Services/api';

const MedicalHistory = () => {
  const [medicalHistory, setMedicalHistory] = useState([]);

  useEffect(() => {
    const loadMedicalHistory = async () => {
      const data = await fetchMedicalHistory();
      setMedicalHistory(data);
    };
    loadMedicalHistory();
  }, []);

  const handleAddMedicalRecord = async (record) => {
    const newRecord = await addMedicalRecord(record);
    setMedicalHistory([...medicalHistory, newRecord]);
  };

  return (
    <div>
      <h2>Historial Médico</h2>
      <MedicalHistoryForm onSubmit={handleAddMedicalRecord} />
      <h3>Registros Médicos</h3>
      <ul>
        {medicalHistory.map((record) => (
          <li key={record.id}>
            ID Animal: {record.animalId}, Fecha de Vacunación: {record.vaccinationDate}, Tratamiento: {record.treatment}
          </li>
        ))}
      </ul >
    </div>
  );
};

export default MedicalHistory;