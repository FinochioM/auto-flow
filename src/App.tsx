import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Control from './components/Control';
import Sistema from './components/Sistema';
import Navbar from './components/Navbar';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Router>
      <Navbar />
      {/* Barra de navegación entre secciones */}
      <Box sx={{ width: '50%', marginTop: '15px' }}> {/* Aseguramos que esté debajo de Navbar */}
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Inicio" href="/inicio" />
          <Tab label="Studio" href="/studio" />
          <Tab label="Control" href="/control" />
          <Tab label="Sistema" href="/sistema" />
        </Tabs>
      </Box>

      {/* Definimos las rutas */}
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/studio" element={<Layout />} />
        <Route path="/control" element={<Control />} />
        <Route path="/sistema" element={<Sistema />} />
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
    </Router>
  );
}

export default App;