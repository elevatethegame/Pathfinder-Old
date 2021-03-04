import React, { Component } from 'react';
import runAStar from '../Algorithms/AStar';
import runBFS from '../Algorithms/BFS';
import runDFS from '../Algorithms/DFS';
import Popup from './Popup/Popup';
import AStarGIF from '../images/AStar.gif';
import BFSGIF from '../images/BFS.gif'
import DFSGIF from '../images/DFS.gif'
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    const popups = [
      {algoName: "A Star Algorithm", algoGIF:AStarGIF, 
      description1:"The A Star Algorithm is a \"smart\" algorithm that chooses to explore nodes based on a sum total of " +
      "the actual cost required to travel to the node and how near that node appears to be to the goal.",
      description2:"Nodes with lower sum totals are explored first. How near the node appears to be to the goal " + 
      "is estimated by a heuristic function; in this case we use the Manhattan Distance between the node and the goal."}
      ,
      {algoName: "Breadth First Search Algorithm", algoGIF:BFSGIF, 
      description1:"The Breadth First Search Algorithm is an algorithm that explores nodes layer by layer. " +
      "It first explores all nodes a distance of 1 away from the start node, then all nodes a distance of 2, nodes at a distance of 3, and so on.",
      description2:"This careful manner of visiting nodes to find the goal node results in the BFS algorithm being able " + 
      "to find the optimal path from start node to the goal if all the edges between nodes in the graph are of the same weight."}
      ,
      {algoName: "Depth First Search Algorithm", algoGIF:DFSGIF, 
      description1:"The Depth First Seach Algorithm is an algorithm for which at any point in time we simply pick an unvisited neighbour of the current node to explore, " + 
      "and repeat until we finally reach a node which either has no more neighbours or whose neighbours have all already been visited.",
      description2:"As one would expect, there are no guarantees on the optimality of the path found between the start and the goal node."}
    ]

    this.state = {
      selectedAlgorithm: null,
      shouldShowPopup: false,
      currentPopup: 0,
      popups: popups
    }
  } 

  navigateLeftOfPopup = () => {
    // Javascript % function works differently for negative numbers from what we expect
    const modulo = (n, m) => { return ((n % m) + m) % m; }
    this.setState({
      currentPopup: modulo((this.state.currentPopup - 1), this.state.popups.length)
    });
  }

  navigateRightOfPopup = () => {
    this.setState({
      currentPopup: (this.state.currentPopup + 1) % this.state.popups.length
    });
  }

  setAlgorithm = (algorithm) => {
    this.setState({
      selectedAlgorithm: algorithm
    });
  }

  openPopup = () => {
    this.setState({
      shouldShowPopup: true
    });
  }

  closePopup = () => {
    this.setState({
      currentPopup: 0,
      shouldShowPopup: false
    });
  }

  render() {
    let popup;
    if (this.state.shouldShowPopup) {
      popup = (
        <div className="pop-up-container">
          <Popup 
            algoName={this.state.popups[this.state.currentPopup].algoName}
            algoGIF={this.state.popups[this.state.currentPopup].algoGIF}
            description1={this.state.popups[this.state.currentPopup].description1}
            description2={this.state.popups[this.state.currentPopup].description2}
            navigateLeft={this.navigateLeftOfPopup}
            navigateRight={this.navigateRightOfPopup}
            closePopup={this.closePopup}
          >
          </Popup>
        </div>
      )
    } else {
      popup = null;
    }

    return (
      <div>

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
              <li className="navItem" onClick={this.openPopup}><span>Learn the Algos</span></li>
          </ul>
        </div>

        {popup}

      </div>
    );
  }
}

export default Navbar;