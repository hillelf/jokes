import React from "react";

function Quote({quote}) {
  const authorName = quote.author ? `by ${quote.author}` : "";

  return (
    <>
      <div data-testid="quote-text" className="quote">
        {quote.text}
        <p>{authorName}</p>
      </div>
    </>
  );
}

export default Quote;
