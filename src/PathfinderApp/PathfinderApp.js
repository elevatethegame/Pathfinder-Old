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
        return {isVisitedNode: false, isStartNode: false, isEndNode: false, isWallNode: false, isOnPath: false};  // node's properties (state)
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
  setVisited = (i, j) => {
    // console.log("Handle visit of ", i, j);
    const rows = this.state.rows.slice();
    rows[i][j].isVisitedNode = true;
    this.setState({
      rows: rows
    })
  }

  // Set the node with coordinate (i, j) to be onpath
  setOnPath = (i, j) => {
    // console.log("Handle visit of ", i, j);
    const rows = this.state.rows.slice();
    rows[i][j].isOnPath = true;
    this.setState({
      rows: rows
    })
  }

  startSearch = () => {
    console.log("Running A* Algorithm");
    this.clearPath();
    const { pathLst, visitedLst } = 
        runAStar(...this.state.startCoord, ...this.state.endCoord, this.state.rows);
    visitedLst.forEach((coord) => {
      setTimeout(() => this.setVisited(...coord), 40);
    });
    console.log(pathLst);
    pathLst.forEach((coord) => {
      setTimeout(() => this.setOnPath(...coord), 40);
    });
  }

  // Reset state of every node to default values except for isStartNode, isEndNode and isWallNode properties
  clearPath = () => {
    console.log("Clearing Board");
    const rows = this.state.rows.slice();
    rows.forEach((row) => {
      row.forEach((node) => {
        node.isVisitedNode = false;
        node.isOnPath = false;
      });
    });
    this.setState({
      rows: rows
    })
  }

  // Reset state of every node to default values
  clearBoard = () => {
    console.log("Clearing Board");
    const rows = this.state.rows.slice();
    rows.forEach((row) => {
      row.forEach((node) => {
        node.isWallNode = false;
        node.isVisitedNode = false;
        node.isOnPath = false;
      });
    });
    this.setState({
      rows: rows
    })
  }

  probability = (p) => {  // Returns true if success occurred for event with probability of success p
    return Math.random() <= p;
  }

  generateWalls = () => {
    this.clearBoard();
    console.log("Generating Walls");
    const rows = this.state.rows.slice();
    rows.forEach((row) => {
      row.forEach((node) => {
        if (this.probability(0.3)) {
          node.isWallNode = true;
        }
      });
    });
    this.setState({
      rows: rows
    })
  }

  render() {
    return (
      <div>
        <Navbar onClickSearch={this.startSearch} onClickGenWalls={this.generateWalls} />
        <Grid rows={this.state.rows} />
      </div>
    );
  }

}

export default PathfinderApp;
