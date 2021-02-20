import './Grid.css';
import MyNode from './MyNode/MyNode';

function Grid(props) {
  const { rows } = props
  const rowsLst = rows.map((row, rowIndex) => {
    const nodesLst = row.map((node, nodeIndex) => {
      if (node.isStartNode) {
        return <MyNode className="start" key={nodeIndex}></MyNode>
      } else if (node.isEndNode) {
        return <MyNode className="end" key={nodeIndex}></MyNode>
      } else if (node.isOnPath) {
        return <MyNode className="onpath" key={nodeIndex}></MyNode>
      } else if (node.isVisited) {
        return <MyNode className="visited" key={nodeIndex}></MyNode>
      } else {
        return <MyNode className="unvisited" key={nodeIndex}></MyNode>
      }
    });
    return (
        <tr key={rowIndex}>{ nodesLst }</tr>
    );
  });

  return (
    <table>
      <tbody>
        { rowsLst }
      </tbody>
    </table>
  );
}

export default Grid;