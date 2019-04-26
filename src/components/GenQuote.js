import React from "react";

function GenQuote(props) {
  return (
    <button className="quoteButton" onClick={props.onClick}>
      New Quote
    </button>
  );
}
export default GenQuote;
