// RegistroForm.js
import React, { useState } from 'react';
import './Registro.css'; // Importa tu archivo CSS

function RegistroForm() {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a tu backend.
    console.log("Cedula:", cedula, "Nombre:", nombre);
  };

  return (
    <div className="registro-form-container">
      <h2 className="registro-form-title">Registro</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <div className="form-group">
          <label htmlFor="cedula" className="form-label">Cédula:</label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroForm;
