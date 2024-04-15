// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar Routes
import Header from './components/Header/Header.js';
import Inicio from './Inicio/Inicio.js';
import RegistroForm from './components/Registro/RegistroForm.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Envuelve tus rutas con Routes */}
          <Route path="/" element={<Inicio />} /> {/* Usa el atributo 'element' para especificar el componente */}
          <Route path="/registro" element={<RegistroForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
