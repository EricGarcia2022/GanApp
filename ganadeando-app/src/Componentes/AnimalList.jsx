/* eslint-disable react/prop-types */
import React from 'react';

const AnimalList = ({ animals, onDelete }) => (
  <ul>
    {animals.map((animal) => (
      <li key={animal.id}>
        {animal.name} - {animal.breed} - {animal.name} - {animal.breed}
        <button onClick={() => onDelete(animal.id)}>Eliminar</button>
      </li>
    ))}
  </ul>
);

export default AnimalList;