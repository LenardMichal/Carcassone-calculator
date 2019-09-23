import React from 'react';
import './App.css';
import MeepleContainer from './components/MeepleContainer/MeepleContainer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>
          Carcassone calculator
        </h1>
      </header>
      <MeepleContainer />
      <footer>
        <a 
        alt='github repo link' 
        href='https://github.com/LenardMichal/Carcassone-calculator'
        nofollow>
          Link to github
        </a>
      </footer>
    </div>
  );
}

export default App;
