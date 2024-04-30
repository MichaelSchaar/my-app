import logo from './logo.svg';
import './App.css';
import profileImage from './johnny.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} alt="Michael Schaar" />
        <h1>Hi there, I'm Michael Schaar.</h1> {/* Larger text for greeting */}
        <p>I am a web developer!</p>
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
