import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost/phpmyadmin/index.php?route=/database/sql&db=ganadeandoapp', // API de la BD
});

// Función para obtener los animales
export const fetchAnimals = async () => {
  const response = await api.get('/animals');
  return response.data;
};

// Función para agregar un nuevo animal
export const addAnimal = async (animal) => {
  const response = await api.post('/animals', animal);
  return response.data;
};

// Función para eliminar un animal
export const deleteAnimal = async (animalId) => {
  await api.delete(`/animals/${animalId}`);
};

//Funcion para buscar produccion de cada animal
export const fetchProduction = async () => {
    const response = await api.get('/animals');
  return response.data;
};
//Funcion para añadir produccion animal
export const addProduction = async () => {
    const response = await api.get('/animals');
  return response.data;
};

//Funcion para buscar historial medico del animal
export const fetchMedicalHistory = async () => {
    const response = await api.get('/animals');
  return response.data;
};

//Funcion para añadir historial medico animal
export const addMedicalRecord =async () => {
    const response = await api.get('/animals');
  return response.data;
    
};


