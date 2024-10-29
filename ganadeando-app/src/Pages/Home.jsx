/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


function Registro({ irInicioSesion }) {
    // Estados para capturar los datos del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Estado para desactivar el botón de envío mientras se procesa
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true); // Desactivar botón mientras se envía

        // Crear el objeto con los datos a enviar
        const datosRegistro = {
            nombre,
            email,
            password,
        };

        // Realizar la petición POST al backend
            fetch('http://localhost:8080/guardar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosRegistro), // Enviar datos como JSON
            })
            .then((response) => {
                if (response.ok) {
                    console.log('Registro exitoso');
                    
                    // Limpiar los campos del formulario
                    setNombre('');
                    setEmail('');
                    setPassword('');
                } else {
                    console.error('Error en el registro');
                }
            })
            .catch((error) => {
                console.error('Error en la petición:', error);
            })
            .finally(() => {
                setIsSubmitting(false); // Volver a habilitar el botón
            });
    };

    return (
        <>
            <div>
                <form className="formularioR" onSubmit={handleSubmit}>
                    <h1 className="create-account">Crear una cuenta</h1>
                    <div className="iconos">
                        <div className="border-icono">
                            <FaFacebook color="white" /><>   </>
                            <FaInstagram color="white" /><>   </>
                            <FaTwitter color="white" /><>   </>
                        </div>
                    </div>
                    <p className="cuenta-gratis">Crear una cuenta gratis</p>
                    <label htmlFor="Nombre">Nombre</label>
                    <input 
                        type="text" 
                        id="Nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required
                    />
                    <label htmlFor="email">Correo</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    {/* Botón de envío desactivado si está en proceso */}
                    <button 
                        type="submit"
                        className={`submit-button ${isSubmitting ? 'disabled' : ''}`} 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Registrando..." : "Registrarse"}
                    </button>
                </form>
        
            </div>
        </>
    );
}

export default Registro;


