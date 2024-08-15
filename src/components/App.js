import Home from '../pages/Home/index.jsx'
import Survey from '../pages/FichesDeLogement/index.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Bjr !<br/>
        <Home />
        <Survey />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;