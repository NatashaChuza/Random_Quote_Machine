import React from 'react';
import './App.css';
import Author from './components/Author.js'
import QuoteBox from './components/QuoteBox.js'
import TweetButton from './components/TweetButton.js'
import GenQuote from './components/GenQuote.js'
import './styles.css'
import axios from "axios"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      author:"Paul",
      quote: "I will win"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event){
    const rand = Math.floor(Math.random() * 100)
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    axios.get(url).then( res => {
       this.setState(
         {
           author: res.data.quotes[rand].author,
           quote: res.data.quotes[rand].quote
         }
       )
        }
    )
}
  render(){
    return(
      <div className="compContainer">
      < QuoteBox quote={this.state.quote}/>
      <div className="buttonDiv">
      <TweetButton quote={this.state.quote}/>
      </div>
      < Author author={this.state.author}/>
      < GenQuote onClick={this.handleClick}/>
      </div>
    )

      }
}

export default App;
