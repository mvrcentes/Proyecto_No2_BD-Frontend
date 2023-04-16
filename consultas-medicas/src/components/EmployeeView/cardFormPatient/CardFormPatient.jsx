import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import "./CardFormPatient.css";

const OptionView = ({ option }) => {
    return (
        <div className="optionView">
            <div className="text">{option}</div>
        </div>
    );
};

const CardFormPatient = ({ title, options, note, type}) => {
    return (
        <div className="cardFormPatientContainer">
            <div className="cardFormPatient">
                <div className="title-card">{title}</div>
                <div className="row-information">
                    {type ? <p className="note">{note}</p> : options.map((option, index) => (<OptionView option={option} key={index} /> ))}
                </div>
            </div>
        </div>
    );
};

export default CardFormPatient;
