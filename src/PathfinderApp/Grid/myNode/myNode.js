import './MyNode.css';

function MyNode(props) {
  return (
    <td className={props.className} 
        style={{animationDelay: `${props.delay}ms`}}
        onAnimationEnd={() => {
          // Once the end node has been visited, trigger search animation
          if (props.isEndNode && props.isVisitedNode) {
            console.log("On Animation End");
            props.animatePath(props.pathLst, 20);
          }
        }}
    ></td>
  );
}

export default MyNode;