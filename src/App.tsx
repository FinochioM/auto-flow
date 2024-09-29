import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Bienvenido a Auto-Flow</h1>
        <p>Seleccione una opción en la barra de menú para comenzar.</p>
      </div>
    </div>
  );
}

export default App;