import React from "react";
// import logo from './logo.svg';
import "./App.css";
import JokeGenerator from "./jokeGenerator";
import PoemGenerator from "./poemGenerator";
import QuoteGenerator from "./quoteGenerator";

function App() {
  return (
    <div className="App">
      <h1>Poems, Jokes and Quotes</h1>
      <div>
        <PoemGenerator />
      </div>
      <div>
        <JokeGenerator />
      </div>
      <div>
        <QuoteGenerator />
      </div>
    </div>
  );
}

export default App;
