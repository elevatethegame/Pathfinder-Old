import './Grid.css';
import MyNode from './MyNode/MyNode';

function Grid(props) {
  const { rows } = props
  const rowsLst = rows.map((row, index) => {
    const nodesLst = row.nodes.map((node, index) => {
      return <MyNode key={index}></MyNode>
    });
    return (
        <tr key={index}>{ nodesLst }</tr>
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