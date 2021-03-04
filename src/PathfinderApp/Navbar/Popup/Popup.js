import './Popup.css';

function Popup(props) {
    return (
        <div className="pop-up">
            <i onClick={props.closePopup} className="fas fa-times x-button"></i>
            <h1>{props.algoName}</h1>
            <div className="imageLayer">
                <i onClick={props.navigateLeft} className="fas fa-arrow-circle-left arrow"></i>
                <img src={props.algoGIF} alt={props.algoName} />
                <i onClick={props.navigateRight} className="fas fa-arrow-circle-left arrow rightArrow"></i>
            </div>
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