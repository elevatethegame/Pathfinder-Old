import './MyNode.css';

function MyNode(props) {
  return (
    <td className={props.className} 
        style={{animationDelay: `${props.delay}ms`}}
        onAnimationEnd={() => {
          // Once the end node has been visited, trigger the path animation
          if (props.isEndNode) {
            console.log("On Animation End");
            // props.animatePath(props.pathLst, 80);  // Temporary code to create GIF ===========================================================================
            props.animatePath(props.pathLst, 40);
          }
        }}
    ></td>
  );
}

export default MyNode;