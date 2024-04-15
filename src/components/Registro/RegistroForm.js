import React, { useState } from 'react';
import './Registro.css'; // Importa tu archivo CSS

function RegistroForm() {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [registros, setRegistros] = useState([]);
  const [indiceEdicion, setIndiceEdicion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (indiceEdicion !== null) {
      // Si hay un índice de edición, actualiza el registro existente
      const nuevosRegistros = [...registros];
      nuevosRegistros[indiceEdicion] = { cedula, nombre };
      setRegistros(nuevosRegistros);
      setIndiceEdicion(null); // Resetea el índice de edición después de la actualización
    } else {
      // Si no hay un índice de edición, agrega un nuevo registro
      const nuevoRegistro = { cedula, nombre };
      setRegistros([...registros, nuevoRegistro]);
    }
    // Limpia los campos después de enviar el formulario
    setCedula('');
    setNombre('');
  };

  const handleEdit = (index) => {
    // Establece los valores del registro seleccionado para edición
    const registroAEditar = registros[index];
    setCedula(registroAEditar.cedula);
    setNombre(registroAEditar.nombre);
    // Establece el índice de edición
    setIndiceEdicion(index);
  };

  const handleCancelEdit = () => {
    // Cancela la edición y limpia los campos
    setIndiceEdicion(null);
    setCedula('');
    setNombre('');
  };

  const eliminarRegistro = (index) => {
    const nuevosRegistros = [...registros];
    nuevosRegistros.splice(index, 1);
    setRegistros(nuevosRegistros);
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
        <button type="submit" className="form-button">{indiceEdicion !== null ? 'Editar' : 'Registrar'}</button>
        {indiceEdicion !== null && (
          <button type="button" onClick={handleCancelEdit} className="cancelar-button">Cancelar Edición</button>
        )}
      </form>

      <div className="registros-container">
        <h2 className="registros-title">Registros</h2>
        <ul className="registros-list">
          {registros.map((registro, index) => (
            <li key={index} className="registro-item">
              <span>{registro.cedula} - {registro.nombre}</span>
              <button onClick={() => handleEdit(index)} className="editar-button">Editar</button>
              <button onClick={() => eliminarRegistro(index)} className="eliminar-button">Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RegistroForm;
