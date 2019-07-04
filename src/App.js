import React, { Component } from 'react';
import Header from "./Header";
import SearchInput from "./SearchInput"
import EmojiResult from "./EmojiResult"
import filterEmoji from "./filterEmoji";



export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    }
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)

    });
 console.log(event.target.value)
  }

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResult emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}

