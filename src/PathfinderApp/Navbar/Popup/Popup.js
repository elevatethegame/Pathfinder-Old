import LeftArrowSVG from '../../images/left-arrow.svg';
import './Popup.css';

function Popup(props) {
    return (
        <div className="pop-up">
            <h1>{props.algoName}</h1>
            <img src={props.algoGIF} alt={props.algoName} />
            <p>
                {props.description1}
            </p>
            <p>
                {props.description2}
            </p>
        </div>
    )
}

export default Popup