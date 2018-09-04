import React, { Component } from 'react';
import './css/App.css';
import quoteList from './quotes.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteList[0]['quote'],
      author: quoteList[0]['author']
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.handleTweet = this.handleTweet.bind(this);
  }
  
  handleClick() {
    
    const randomPick = Math.floor( (Math.random() * quoteList.length) )
    
    this.setState({
      quote: quoteList[randomPick]['quote'],
      author: quoteList[randomPick]['author']
    });
    
  }
  
  handleTweet() {
    
  window.open("https://twitter.com/intent/tweet?text="+this.state.quote+ " " + "-" + this.state.author);

  }
  
  render() {
    
    return (
      <div className='container' id='quote-box'>
  <div className='quote-text' id='text'>{this.state.quote}</div>
  <div className='quote-author' id='author'>- {this.state.author}</div>
  <div className='quote-buttons' id='new-quote'>
    <a className="button" id="tweet-quote" title="Tweet now!" target="_blank">
    <i className='fa fa-twitter' onClick={this.handleTweet}></i>
    </a>
    <button className="button" id='new-quote' onClick={this.handleClick}><strong>Next quote</strong></button>
  </div>
</div>
    )
  }
}

export default App;
