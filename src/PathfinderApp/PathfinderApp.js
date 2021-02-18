import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Grid from './Grid/Grid';
import './PathfinderApp.css';

class PathfinderApp extends Component {
  constructor(props) {
    super(props);
    let rows = Array(0);
    for (let i = 0; i < 30; i++) {
      let nodes = Array(70).fill({});
      rows.push({nodes: nodes})
    }
    this.state = {
      rows: rows
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Grid rows={this.state.rows} />
      </div>
    );
  }
}

export default PathfinderApp;
