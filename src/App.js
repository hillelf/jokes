import React from 'react';
// import logo from './logo.svg';
import './App.css';
import JokeGenerator from './jokeGenerator';

function App() {
  return (
    <div className="App">
      <div className="leftCol"></div>
      <div className="mainCol">
            <JokeGenerator />
      </div>
      <div className="rightCol"></div>
    </div>
  );
}

export default App;
