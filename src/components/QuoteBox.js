import React from "react";

function QuoteBox(props) {
  return (
    <div className="quoteBox">
      <h1> " {props.quote} "</h1>
    </div>
  );
}
export default QuoteBox;
