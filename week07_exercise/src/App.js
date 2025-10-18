import logo from './logo.svg';
import './App.css';
import Student from './student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <Student sid={101464667} fnm="Patrick" lnm="Solamillo" city="Toronto" />
      </header>
    </div>
  );
}

export default App;
