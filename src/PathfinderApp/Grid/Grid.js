import './Grid.css';
import myNode from './myNode/myNode';

function Grid(props) {
  const { rows } = props
  const rowsLst = rows.map((row, index) => {
    const nodesLst = row.nodes.map((node, index) => {
      return <myNode key={index}></myNode>
    });
    return (
        <tr key={index}>{ nodesLst }</tr>
    );
  });

  return (
    <table>
      { rowsLst }
    </table>
  );
}

export default Grid;