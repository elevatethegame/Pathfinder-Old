import React, { Component } from 'react';
import runAStar from '../Algorithms/AStar';
import runBFS from '../Algorithms/BFS';
import runDFS from '../Algorithms/DFS';
import Popup from './Popup/Popup';
import AStarGIF from '../images/AStar.gif';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlgorithm: null,
      shouldShowPopup: false
    }
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
      shouldShowPopup: false
    });
  }

  render() {
    let popup;
    if (this.state.shouldShowPopup) {
      popup = (
        <div className="pop-up-container">
          <Popup 
            algoName="A Star Algorithm"
            algoGIF={AStarGIF}
            description1={"The A Star Algorithm is a \"smart\" algorithm that chooses to explore nodes based on a sum total of" +
            "the actual cost required to travel to the node and how near that node appears to be to the goal."}
            description2={"Nodes with lower sum totals are explored first. How near the node appears to be to the goal " + 
            "is estimated by a heuristic function; in this case we use the Manhattan Distance between the node and the goal."}
          >
          </Popup>
        </div>
      );
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