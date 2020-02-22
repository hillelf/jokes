import React from "react";
import axios from "axios";
import Quote from "./quote";

class QuoteGenerator extends React.Component {
  state = {
    quotes: null,
    loading: false
  };

  loadQuote = async () => {
    this.setState({loading: true});

    const resp = await axios.get("https://type.fit/api/quotes", {
      headers: {Accept: "application/json"}
    });

    const quotes = resp.data;

    this.setState({loading: false, quotes});
  };

  render() {
    const {quotes, loading} = this.state;

    const l = quotes && quotes.length;

    const randomNum = Math.floor(Math.random() * Math.floor(l));

    const quote = quotes && quotes[randomNum];

    return (
      <>
        <button onClick={this.loadQuote} type="button">
          Load a random quote
        </button>
        <br />
        <br />
        {!quote && <div>You haven&apos;t loaded any quotes yet!</div>}
        {quote && !loading && <Quote quote={quote} />}
      </>
    );
  }
}

export default QuoteGenerator;
