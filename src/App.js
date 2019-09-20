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
      <div id="scrim"></div>
    </div>
  );
}

export default App;
