import './Grid.css';
import MyNode from './MyNode/MyNode';

function Grid(props) {
  const { rows } = props
  const rowsLst = rows.map((row, rowIndex) => {
    const nodesLst = row.map((node, nodeIndex) => {
      if (node.isStartNode) {
        return <MyNode className="start" key={nodeIndex} isEndNode={false}></MyNode>
      } else if (node.isEndNode) {
        if (node.isVisitedNode) {
          return <MyNode className="end-visited" key={nodeIndex} isEndNode={true} 
            isVisitedNode={true} pathLst={props.pathLst} animatePath={props.animatePath}></MyNode>
        }
        return <MyNode className="end" key={nodeIndex} isEndNode={true} 
            isVisitedNode={false} pathLst={props.pathLst} animatePath={props.animatePath}></MyNode>
      } else if (node.isWallNode) {
        return <MyNode className="wall" key={nodeIndex} isEndNode={false}></MyNode>
      } else if (node.isOnPath) {
        return <MyNode className="onpath" key={nodeIndex} delay={node.delay} isEndNode={false}></MyNode>
      } else if (node.isVisitedNode) {
        return <MyNode className="visited" key={nodeIndex} delay={node.delay} isEndNode={false}></MyNode>
      } else {
        return <MyNode className="unvisited" key={nodeIndex} isEndNode={false}></MyNode>
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