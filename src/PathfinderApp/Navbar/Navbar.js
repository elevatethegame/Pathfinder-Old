import React, { Component } from 'react';
import runAStar from '../Algorithms/AStar';
import runBFS from '../Algorithms/BFS';
import runDFS from '../Algorithms/DFS';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlgorithm: null
    }
  } 

  setAlgorithm(algorithm) {
    this.setState({
      selectedAlgorithm: algorithm
    });
  }

  render() {
    return (
      <div className="navContainer">
      <ul className="navBar">
          <li className="navItem">
            <span>Pick an Algorithm</span>
            <ul className="subMenu">
              <li className="subMenuItem" onClick={() => this.setAlgorithm(runAStar)}><span>A Star Search</span></li>
              <li className="subMenuItem" onClick={() => this.setAlgorithm(runBFS)}><span>Breadth First Search</span></li>
              <li className="subMenuItem" onClick={() => this.setAlgorithm(runDFS)}><span>Depth First Search</span></li>
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