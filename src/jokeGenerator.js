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
    
    const { data: { joke } } = await axios.get('https://icanhazdadjoke.com/', { headers: {"Accept": "application/json"} });

    this.setState({loading: false, joke});
  };

  render() {
    const { joke, loading } = this.state;

    return (
           <React.Fragment>
             <button onClick={this.loadJoke} type="button">
                Load a random joke
             </button>
             <br />
             <br />

             {!joke && <div>You haven&apos;t loaded any joke yet!</div>}
             {joke && !loading && <Joke text={joke} />}
             {loading && <div>Loading...</div>}
           </React.Fragment>
    );
  }
}