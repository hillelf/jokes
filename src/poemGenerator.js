import React from 'react';
import axois from 'axios';
import Poem from './poem';

export default class PoemGenerator extends React.Component {
  state = {
    loading: false,
    poem: null
  }
  
  loadPoem = async () => {
    this.setState({loading: true});
    
    const poems = await axios.get('https://www.poemist.com/api/v1/randompoems', { headers: {"Accept": "application/json"} });
    const { content } = poems[0];
    const poem = content;
    this.setState({loading: false, poem});
  };

  render() {
    const { poem, loading } = this.state;

    return (
      <React.Fragment>
        <button onClick={this.loadPoem} type="button">
                Load a random poem
             </button>
             <br />
             <br />

             {!poem && <div>You haven&apos;t loaded any poems yet!</div>}
             {poem && !loading && <Poem text={poem} />}
             {loading && <div>Loading...</div>}
      </React.Fragment>
    );
  }
};