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
    title = "Paciente";
    options = ["Sopripren", "Z20", "Vitamina D"];
    note = "Lorem ipsum dolor sit amet consectetur adipiscing elit, at sem aenean sociosqu feugiat ultricies, gravida natoque molestie lectus ligula vitae. A pellentesque libero ullamcorper dictumst dignissim etiam, rutrum risus egestas viverra. Enim est vitae proin rutrum himenaeos fusce netus, aliquet dapibus nec auctor per euismod vel, erat porttitor aenean natoque malesuada cubilia. Platea ultrices phasellus accumsan maecenas quisque cum hac ut, nec torquent massa netus laoreet rhoncus purus aliquam, nostra dapibus tristique sed duis congue leo. Integer netus tempus bibendum phasellus facilisis tortor sapien, ultrices molestie gravida ad magna non mollis, nisi torquent tellus himenaeos iaculis eu. Blandit scelerisque torquent enim dignissim potenti himenaeos, interdum quisque aptent nunc vel mus, vulputate dictum porttitor rhoncus justo."
    type = true
    return (
        <div className="cardFormPatientContainer">
            <div className="cardFormPatient">
                <div className="title">{title}</div>
                <div className="fila">
                    {type ? <p className="note">{note}</p> : options.map((option, index) => (<OptionView option={option} key={index} /> ))}
                </div>
            </div>
        </div>
    );
};

export default CardFormPatient;
