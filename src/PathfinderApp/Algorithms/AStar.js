import Node from './Node'
import Heap from 'collections/heap'

// Heuristic used by the A-Star Algorithm
function getManhattanDist(ai, aj, bi, bj) {
    return Math.abs(ai - bi) + Math.abs(bi - bj);
}

// Get all neighbours of a node 
function getNeighbours(node, end_i, end_j, max_i, max_j) {
    const neighbours = Array(0);
    const i = node.i;
    const j = node.j;
    if (i - 1 >= 0) {
        neighbours.push(new Node(i - 1, j, node.g + 1, getManhattanDist(i - 1, j, end_i, end_j), node));
    }
    if (i + 1 <= max_i) {
        neighbours.push(new Node(i + 1, j, node.g + 1, getManhattanDist(i + 1, j, end_i, end_j), node));
    }
    if (j - 1 >= 0) {
        neighbours.push(new Node(i, j - 1, node.g + 1, getManhattanDist(i, j - 1, end_i, end_j), node));
    }
    if (j + 1 <= max_j) {
        neighbours.push(new Node(i, j + 1, node.g + 1, getManhattanDist(i, j + 1, end_i, end_j), node));
    }
    return neighbours;
}

// Return a list of [i, j] coordinates representing a path from the start to the end node
function getPathList(node) {
    if (node) {
        const pathLst = getPathList(node.parent);
        pathLst.add(node);
        return pathLst;
    }
    return Array(0);
}

const runAStar = function(start_i, start_j, end_i, end_j, max_i, max_j, handleVisited) {
    const startNode = new Node(start_i, start_j, 0, getManhattanDist(start_i, start_j, end_i, end_j), null);
    const heap = new Heap([startNode], null, (node1, node2) => node2.f - node1.f);
    const visited = new Set();
    while (heap.length > 0) {
        const currNode = heap.pop();
        const neighbours = getNeighbours(currNode, end_i, end_j, max_i, max_j);
        for (let i = 0; i < neighbours.length; i++) {
            const neighbour = neighbours[i];
            if (neighbour.i === end_i && neighbour.j === end_j)  // neighbour is the goal node, terminate
                return getPathList(neighbour);
            if (!visited.has([neighbour.i, neighbour.j].toString()))  // if neighbour has not been visited before, add to heap
                heap.add(neighbour);
        }
        handleVisited(currNode.i, currNode.j);
        visited.add([currNode.i, currNode.j].toString());
    }
    // If the code reaches here, no path was found
    return null;
}

export default runAStar;