import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import SectionMenu from './components/SectionMenu';
import Inicio from './components/Inicio';
import Control from './components/Control';
import Sistema from './components/Sistema';
import Layout from './components/Layout';


function App() {
  return (
      <Router>
          <Navbar/>
          <SectionMenu/>
          <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/studio" element={<Layout />} />
              <Route path="/control" element={<Control />} />
              <Route path="/sistema" element={<Sistema />} />
        </Routes>
      </Router>
  );
}

export default App;