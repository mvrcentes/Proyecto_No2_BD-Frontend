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

const CardFormPatient = ({ title, options }) => {
    title = "Paciente";
    options = ["Sopripren", "Z20", "Vitamina D"];
    return (
        <div className="cardFormPatientContainer">
            <div className="cardFormPatient">
                <div className="title">{title}</div>
                <div className="fila">
                    {options.map((option, index) => (
                        <OptionView option={option} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardFormPatient;
