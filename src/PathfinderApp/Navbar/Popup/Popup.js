import './Popup.css';

function Popup(props) {
    return (
        <div className="pop-up">
            <i class="fas fa-times x-button"></i>
            <h1>{props.algoName}</h1>
            <div className="imageLayer">
                <i className="fas fa-arrow-circle-left arrow"></i>
                <img src={props.algoGIF} alt={props.algoName} />
                <i className="fas fa-arrow-circle-left arrow rightArrow"></i>
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