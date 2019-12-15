import React from 'react';
import axios from 'axios';
import Joke from './joke';

export default class JokeGenerator extends React.Component {
  state = {
    joke: null,
    loading: false
  };

  loadJoke = async () => {
    this.setState({loading: true});
    
    // const { data: { value: { joke } } } = await axios.get("https://api.icndb.com/jokes/random");

    const config = {
        method: 'get',
        url: 'https://icanhazdadjoke.com/',
        headers: { 'Content-Type': 'application/json' }
    };

    let resp = await axios.get(config).catch((error) => {
       console.log(error);
    });

    let data = resp && resp.data;
    this.setState({loading: false, data});
  };

  render() {
    const { joke, loading } = this.state;

    return (
           <React.Fragment>
             {!joke && <div>You haven&apos;t loaded any joke yet!</div>}
             {joke && !loading && <Joke text={joke} />}
             {loading && <div>Loading...</div>}

             <button onClick={this.loadJoke} type="button">
               Load a random joke
             </button>
           </React.Fragment>
    );
  }
}