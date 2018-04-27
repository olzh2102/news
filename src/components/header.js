import React, { Component } from 'react';
import '../css/styles.css';

class Header extends Component {
  state = {
    keyword: 'Hello'
  }

  inputChangeHandler = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler}/>
      </header>
    );
  }
}

export default Header;