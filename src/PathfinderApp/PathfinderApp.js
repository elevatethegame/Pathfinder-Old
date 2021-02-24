import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Grid from './Grid/Grid';
import runAStar from './Algorithms/AStar';
import runBFS from './Algorithms/BFS';
import runDFS from './Algorithms/DFS';
import './PathfinderApp.css';

class PathfinderApp extends Component {  // PathfinderApp is the only stateful component of our application

  constructor(props) {
    super(props);
    let rows = Array(0);
    for (let i = 0; i < 30; i++) {  // Initialize a grid of 30 rows
      let nodes = Array(70).fill(null).map((node) => {  // Each row will contain 70 nodes
        return {isVisitedNode: false, isStartNode: false, isEndNode: false, isWallNode: false, isOnPath: false, 
          delay: 0};  // node's properties (state)
        }  
      );  
      rows.push(nodes);
    }

    rows[15][20].isStartNode = true;  // Initialize a default start node
    rows[15][50].isEndNode = true;  // Initialize a default end node

    this.state = {
      rows: rows,
      startCoord: [15, 20],
      endCoord: [15, 50],
      pathLst: null
    }
  }

  // Set the nodes on the path with the right path order
  setOnPath = (pathLst, stagger) => {
    const rows = this.state.rows.slice();
    pathLst.forEach((coord, pathOrder) => {
      const [i, j] = coord;
      rows[i][j].delay = stagger * pathOrder;
      rows[i][j].isOnPath = true;
    })
    this.setState({
      rows: rows
    })
  }

  setVisited = (visitedLst, stagger) => {
    const rows = this.state.rows.slice();
    visitedLst.forEach((coord, visitedOrder) => {
      const [i, j] = coord;
      rows[i][j].delay = stagger * visitedOrder;
      rows[i][j].isVisitedNode = true;
    });
    this.setState({
      rows: rows,
    });
  }

  startSearch = () => {
    console.log("Running A* Algorithm");
    this.clearPath();
    const { pathLst, visitedLst } = 
        runAStar(...this.state.startCoord, ...this.state.endCoord, this.state.rows); 
    // set the delay factor of the animation, each succeeding node has 'stagger' millisecond more animation delay than preceding node  
    const stagger = 20;
    console.log(pathLst);
    this.setState({
      pathLst: pathLst
    }, () => this.setVisited(visitedLst, stagger));
    console.log(this.state.pathLst);
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
        <Grid rows={this.state.rows} pathLst={this.state.pathLst} animatePath={this.setOnPath} />
      </div>
    );
  }

}

export default PathfinderApp;
