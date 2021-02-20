import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Grid from './Grid/Grid';
import runAStar from './Algorithms/AStar';
import './PathfinderApp.css';

class PathfinderApp extends Component {  // PathfinderApp is the only stateful component of our application

  constructor(props) {
    super(props);
    let rows = Array(0);
    for (let i = 0; i < 30; i++) {  // Initialize a grid of 30 rows
      let nodes = Array(70).fill(null).map((node) => {  // Each row will contain 70 nodes
        return {isVisited: false, isStartNode: false, isEndNode: false, isWallNode: false, isOnPath: false};  // node's properties (state)
        }  
      );  
      rows.push(nodes);
    }

    rows[15][20].isStartNode = true;  // Initialize a default start node
    rows[15][50].isEndNode = true;  // Initialize a default end node

    this.state = {
      rows: rows,
      startCoord: [15, 20],
      endCoord: [15, 50]
    }
  }

  // Set the node with coordinate (i, j) to be visited
  handleVisited = (i, j) => {
    // console.log("Handle visit of ", i, j);
    const rows = this.state.rows.slice();
    rows[i][j].isVisited = true;
    this.setState({
      rows: rows
    })
  }

  // Set the node with coordinate (i, j) to be onpath
  handleOnPath = (i, j) => {
    // console.log("Handle visit of ", i, j);
    const rows = this.state.rows.slice();
    rows[i][j].isOnPath = true;
    this.setState({
      rows: rows
    })
  }

  startSearch = () => {
    console.log("Running A* Algorithm");
    const { pathLst, visitedLst } = 
        runAStar(...this.state.startCoord, ...this.state.endCoord, this.state.rows.length - 1, this.state.rows[0].length - 1);
    visitedLst.forEach((coord) => {
      setTimeout(() => this.handleVisited(...coord), 40);
    });
    console.log(pathLst);
    pathLst.forEach((coord) => {
      setTimeout(() => this.handleOnPath(...coord), 40);
    });
  }

  render() {
    return (
      <div>
        <Navbar onClick={this.startSearch} />
        <Grid rows={this.state.rows} />
      </div>
    );
  }

}

export default PathfinderApp;
