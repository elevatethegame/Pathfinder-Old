import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navContainer">
      <ul className="navBar">
          <li>Pick an Algorithm</li>
          <li onClick={this.props.onClickSearch}>Start Search!</li>
          <li onClick={this.props.onClickGenWalls}>Generate Walls</li>
      </ul>
      </div>
    );
  }
}

export default Navbar;