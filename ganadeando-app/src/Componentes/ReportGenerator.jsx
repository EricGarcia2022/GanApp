/* eslint-disable react/prop-types */
import React from 'react';

const ReportGenerator = ({ animals, production, medicalHistory }) => (
  <div>
    <h2>Informe de Producción</h2>
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Cantidad</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {production.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2>Informe de Salud</h2>
    <table>
      <thead>
        <tr>
          <th>ID del Animal</th>
          <th>Fecha de Vacunación</th>
          <th>Tratamiento</th>
        </tr>
      </thead>
      <tbody>
        {medicalHistory.map((item) => (
          <tr key={item.id}>
            <td>{item.animalId}</td>
            <td>{item.vaccinationDate}</td>
            <td>{item.treatment}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Animales Bovinos</h2>
    <table>
      <thead>
        <tr>
          <th>ID del Animal</th>
          <th>Nombre</th>
          <th>Fecha nacimiento</th>
          <th>Raza</th>
          <th>Sexo</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((item) => (
          <tr key={item.id}>
            <td>{item.animalId}</td>
            <td>{item.name}</td>
            <td>{item.birthdate}</td>
            <td>{item.Race}</td>
            <td>{item.Sex}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ReportGenerator;