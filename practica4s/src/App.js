import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a <strong>mi práctica 4 de Desarrollo Web Integral</strong>.
        </p>
        <p>
          Editado por <code>Salvador Vega</code>.
        </p>
        <a
          className="App-link"
          href="https://github.com/Salvadorvga2004/practica4s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositorio en GitHub
        </a>
      </header>
    </div>
  );
}

export default App;