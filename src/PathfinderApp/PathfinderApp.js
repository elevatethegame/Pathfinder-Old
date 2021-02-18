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
      let nodes = Array(70).fill(  // Each row will contain 70 nodes
        {isVisited: false, isStartNode: false, isEndNode: false, isWallNode: false}  // node's properties (state)
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
  handleVisited(i, j) {
    const rows = this.state.rows.slice();
    rows[i][j].isVisited = true;
    this.setState({
      rows: rows
    })
  }

  runAlgorithm() {
    console.log("Running A* Algorithm");
    const pathLst = 
        runAStar(...this.state.startCoord, ...this.state.endCoord, this.state.rows.length - 1, this.state.rows[0].length - 1, this.handleVisited);
  }

  render() {
    return (
      <div>
        <Navbar onClick={this.runAlgorithm} />
        <Grid rows={this.state.rows} />
      </div>
    );
  }

}

export default PathfinderApp;
