import logo from './palpatine.png';
import footerImage from './skater.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <br/>
        <p>
          This will be a portfolio website in the future! 
        </p>
        <p>
          But for now, here's Palpatine.
        </p>
      </header>
      <footer>
        <p>Created by Duncan using React :)</p>
        <img src={footerImage} className="App-logo-small" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
