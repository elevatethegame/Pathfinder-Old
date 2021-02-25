import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlgorithm: null
    }
  } 

  render() {
    return (
      <div className="navContainer">
      <ul className="navBar">
          <li>Pick an Algorithm</li>
          <li onClick={() => this.props.onClickSearch(this.state.selectedAlgorithm)}>Start Search!</li>
          <li onClick={this.props.onClickGenWalls}>Generate Walls</li>
      </ul>
      </div>
    );
  }
}

export default Navbar;