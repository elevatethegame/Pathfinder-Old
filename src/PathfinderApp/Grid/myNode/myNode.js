import './MyNode.css';

function MyNode(props) {
  return (
    <td className={props.nodeType}></td>
  );
}

export default MyNode;