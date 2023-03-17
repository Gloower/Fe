import logo from './pngegg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="texto">
          Te amo meu amor
        </p>
        <a
          className="App-link"
          href="https://open.spotify.com/track/7oOOI85fVQvVnK5ynNMdW7?si=10dba73b8fc746f0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui
        </a>
      </header>
    </div>
  );
}

export default App;
