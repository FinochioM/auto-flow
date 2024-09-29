import Navbar from './components/Navbar';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* Aquí renderizamos el Layout que incluye ProjectExplorer y Editor */}
      <Layout />
    </div>
  );
}

export default App;