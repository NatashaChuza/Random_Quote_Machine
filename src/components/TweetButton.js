import React from 'react';
function TweetButton (props){
  console.log(props)
    return(
    <button className="tweetButton btn tooltip"> <a target="_blank"
        href={encodeURI(`https://twitter.com/intent/tweet?text=${props.quote}&hashtags=ITweetedThisFromMyFreeCodeCampReactApp`)}>
        <i className="fab fa-twitter tooltip"></i></a>
        <span className="text"> Tweet this quote</span>
      </button>
    )
    }  
   
    export default TweetButton;