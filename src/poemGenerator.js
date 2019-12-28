import React from 'react';
import axios from 'axios';
import Poem from './poem';

export default class PoemGenerator extends React.Component {
  state = {
    poems: null,
    loading: false
  };
  
  loadPoem = async () => {
    this.setState({loading: true});

    const resp = await axios.get('/api/v1/randompoems', { headers: {"Accept": "application/json"} });

		const poems = resp.data;

    this.setState({loading: false, poems});
  };

  render() {
    const { poems, loading } = this.state;

    const poem = poems && poems[0];
    return (
      <React.Fragment>
        <button onClick={this.loadPoem} type="button">
                Load a random poem
             </button>
             <br />
             <br />

             {!poem && <div>You haven&apos;t loaded any poems yet!</div>}
             {poem && !loading && <Poem poem={poem} />}
             {loading && <div>Loading...</div>}
      </React.Fragment>
    );
  }
};