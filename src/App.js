import React from "react";
import axios from "axios";
import Author from "./components/Author.js";
import QuoteBox from "./components/QuoteBox.js";
import TweetButton from "./components/TweetButton.js";
import GenQuote from "./components/GenQuote.js";
import "./styles.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "Paul",
      quote: "I will win"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // you can omit the event if not needed
    const rand = Math.floor(Math.random() * 100);
    const url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    axios.get(url).then(res => {
      this.setState({
        author: res.data.quotes[rand].author,
        quote: res.data.quotes[rand].quote
      });
    });
    // alternatively you can make use the fetch without a third party tool like axios
    // the following requires no package and works just fine 😀

    // fetch(url)
    //   .then(data => data.json())
    //   .then(res => {
    //     this.setState({
    //       author: res.quotes[rand].author,
    //       quote: res.quotes[rand].quote
    //     });
    //   });
  }
  render() {
    // you can make use of a destructure here
    const { quote, author } = this.state;
    return (
      <div className="compContainer">
        <QuoteBox quote={quote} />
        <div className="buttonDiv">
          <TweetButton quote={quote} />
        </div>
        <Author author={author} />
        <GenQuote onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
