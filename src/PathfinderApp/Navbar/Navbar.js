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
          <li className="navItem">
            <span>Pick an Algorithm</span>
            <ul className="subMenu">
              <li className="subMenuItem"><span>A Star Search</span></li>
              <li className="subMenuItem"><span>Breadth First Search</span></li>
              <li className="subMenuItem"><span>Depth First Search</span></li>
            </ul>
          </li>
          <li className="navItem" onClick={() => this.props.onClickSearch(this.state.selectedAlgorithm)}><span>Start Search!</span></li>
          <li className="navItem" onClick={this.props.onClickGenWalls}><span>Generate Walls!</span></li>
          <li className="navItem"><span>Learn the Algos</span></li>
      </ul>
      </div>
    );
  }
}

export default Navbar;