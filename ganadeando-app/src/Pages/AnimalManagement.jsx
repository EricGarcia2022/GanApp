/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import AnimalForm from '../Componentes/AnimalForm';
import AnimalList from '../Componentes/AnimalList';
import { fetchAnimals, addAnimal, deleteAnimal } from '../Services/api';
import Navbar from '../Componentes/Navbar';
import { Link } from 'react-router-dom';

const AnimalManagement = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const loadAnimals = async () => {
      const data = await fetchAnimals();
      setAnimals(data);
    };
    loadAnimals();
  }, []);

  const handleAddAnimal = async (animal) => {
    const newAnimal = await addAnimal(animal);
    setAnimals([...animals, newAnimal]);
  };

  const handleDeleteAnimal = async (id) => {
    await deleteAnimal(id);
    setAnimals(animals.filter(animal => animal.id !== id));
  };


  return (
    <div>
      
        <h1>Gestión de Ganado</h1>
        <AnimalForm onSubmit={handleAddAnimal} />
        <AnimalList animals={animals} onDelete={handleDeleteAnimal} /> 
      
     </div>
    
  );

 
};

export default AnimalManagement;