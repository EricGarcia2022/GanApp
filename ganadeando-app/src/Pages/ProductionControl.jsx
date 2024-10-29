/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import ProductionForm from '../Componentes/ProductionForm';
import { fetchProduction, addProduction } from '../Services/api';
import Navbar from '../Componentes/Navbar'; 

const ProductionControl = () => {
  const [production, setProduction] = useState([]);

  useEffect(() => {
    const loadProduction = async () => {
      const data = await fetchProduction();
      setProduction(data);
    };
    loadProduction();
  }, []);

  const handleAddProduction = async (productionData) => {
    const newProduction = await addProduction(productionData);
    setProduction([...production, newProduction]);
  };

  return (
    <div>
      <h2>Control de Producción</h2>
      <ProductionForm onSubmit={handleAddProduction} />
      <h3>Producción Registrada</h3>
      <ul>
        {production.map((item) => (
          <li key={item.id}>
            {item.type}: {item.amount} (Fecha: {item.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductionControl;