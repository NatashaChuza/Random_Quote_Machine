import React from 'react';
function GenQuote (props){
    console.log(props.onClick);
    return(
    <button className="quoteButton" onClick={props.onClick}>New Quote</button>
    )
  } 
  export default GenQuote;