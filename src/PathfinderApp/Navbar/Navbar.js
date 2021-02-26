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
          <li className="navItem"><span>Pick an Algorithm</span></li>
          <li className="navItem" onClick={() => this.props.onClickSearch(this.state.selectedAlgorithm)}>Start Search!</li>
          <li className="navItem" onClick={this.props.onClickGenWalls}>Generate Walls</li>
      </ul>
      </div>
    );
  }
}

export default Navbar;