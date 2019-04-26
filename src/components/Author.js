import React from "react";

function Author(props) {
  return (
    <div className="author">
      {" "}
      <h1> -{props.author}</h1>
    </div>
  );
}
export default Author;
