import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductionForm = ({ onSubmit }) => {
  const [type, setType] = useState('leche');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, amount, date });
    setType('leche');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <br /><br />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="leche">Leche</option>
        <option value="carne">Carne</option>
        <option value="nacimientos">Nacimientos</option>
      </select>
      <input type="number" placeholder="Cantidad" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Registrar Producción</button>
    </form>
  );
};

// Añade la validación de las propiedades
ProductionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProductionForm;
