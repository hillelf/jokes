import React from 'react';
// import logo from './logo.svg';
import './App.css';
import JokeGenerator from './jokeGenerator';
import PoemGenerator from './poemGenerator';

function App() {
  return (
    <div className="App">
      <h1>Poems, Jokes and Webcams.</h1>
      <div>
			  <PoemGenerator />
			</div>
      <div>
        <JokeGenerator />
      </div>
      <div></div>
    </div>
  );
}

export default App;
