import logo from './logo.svg';
import './App.css';

function App() {
  function pegou() {
    alert("Você me pegou!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={pegou}/>
        <p>
          Aprendendo docker!
        </p>
        <a
          className="App-link"
          href="https://github.com/cmoraes5"
          target="_blank"
          rel="react logo"
        >
          meu github
        </a>
      </header>
    </div>
  );
}

export default App;
