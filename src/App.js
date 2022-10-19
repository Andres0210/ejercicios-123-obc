import logo from './logo.svg';
import './App.css';
import ComponenteA from './componentes/componenteA';

function App() {
  const contactoPrueba = {
    nombre: 'Amilcar Andres',
    apellido: 'Ibarra Cuadrado',
    email: 'ing_amilkar@hotmail.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;