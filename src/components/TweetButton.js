import React from "react";

function TweetButton(props) {
  // you can have a function like this or you directly add it on the onclick
  function openLink() {
    window.open(
      `https://twitter.com/intent/tweet?text=${
        props.quote
      }&hashtags=ITweetedThisFromMyFreeCodeCampReactApp`,
      "_blank"
    );
    return;
  }
  return (
    <button
      onClick={openLink}
      className="tweetButton btn tooltip fab fa-twitter tooltip"
    >
      {/* {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={encodeURI(
          `https://twitter.com/intent/tweet?text=${
            props.quote
          }&hashtags=ITweetedThisFromMyFreeCodeCampReactApp`
        )}
      >
        <i className="fab fa-twitter tooltip" />
      </a> */}
      {/* <span className="text"> Tweet this quote</span> */}
      Tweet Quote
    </button>
  );
}

export default TweetButton;
