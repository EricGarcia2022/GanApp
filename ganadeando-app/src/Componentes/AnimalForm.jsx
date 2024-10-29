import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AnimalForm = ({ onSubmit }) => {
  const [numberHierro, setnumberHierro] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [sex, setSex] = useState('');
  const [peso, setPeso] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [CantPartos, setCantPartos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ numberHierro,name, breed, birthDate,sex,CantPartos });
    setnumberHierro('');
    setName('');
    setBreed('');
    setSex('');
    setPeso('');
    setBirthDate('');
    setCantPartos('');
  };

  return (
    <form className="AnimalForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="NumeroHierro" value={numberHierro} onChange={(e) => setnumberHierro(e.target.value)} required />
      <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Raza" value={breed} onChange={(e) => setBreed(e.target.value)} required />
      <input type="text" placeholder="Sexo" value={sex} onChange={(e) => setSex(e.target.value)} required />
      <input type="text" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} required />
      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
      <input type="text" placeholder="CantidadPartos" value={CantPartos} onChange={(e) => setCantPartos(e.target.value)} required />
      <button type="submit">Registrar Animal</button>
    </form>
  );
};

export default AnimalForm;