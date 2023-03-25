import consulta from "../../assets/consulta.svg";
import reporte from "../../assets/reporte.svg";
import SignOut from "../../assets/SignOut.svg";
import CardFormPatient from "./cardFormPatient/CardFormPatient";
import InformationCard from "./informationCard/InformationCard";

import { Link } from "react-router-dom";

import "./EmployeeView.css";

const ButtonMenu = ({ icon, text }) => {
    return (
        <div className="buttonMenu">
            <div className="buttonMenuContainer">
                <img className="icon" src={icon}></img>
                <div className="text">{text}</div>
            </div>
        </div>
    );
};

function EmloyeeView({ options }) {
    options = {
        medicamentos: ["Sopripren", "Z20", "Vitamina D"],
        laboratorios: ["Sopripren", "Z20", "Vitamina D"],
        nota: "Lorem ipsum dolor sit amet consectetur adipiscing elit, at sem aenean sociosqu feugiat ultricies, gravida natoque molestie lectus ligula vitae. A pellentesque libero ullamcorper dictumst dignissim etiam, rutrum risus egestas viverra. Enim est vitae proin rutrum himenaeos fusce netus, aliquet dapibus nec auctor per euismod vel, erat porttitor aenean natoque malesuada cubilia. Platea ultrices phasellus accumsan maecenas quisque cum hac ut, nec torquent massa netus laoreet rhoncus purus aliquam, nostra dapibus tristique sed duis congue leo. Integer netus tempus bibendum phasellus facilisis tortor sapien, ultrices molestie gravida ad magna non mollis, nisi torquent tellus himenaeos iaculis eu. Blandit scelerisque torquent enim dignissim potenti himenaeos, interdum quisque aptent nunc vel mus, vulputate dictum porttitor rhoncus justo.",
    };

    return (
        <div className="employeeView">
            <div className="menuEmployee">
                <div className="menuEmployeeContainer">
                    <Link to="/">
                        <h1>Logo</h1>
                    </Link>
                    <ButtonMenu icon={consulta} text="Consulta" />
                    <ButtonMenu icon={reporte} text="Reporte" />
                    <ButtonMenu
                        className="signOut"
                        icon={SignOut}
                        text="Cerrar sesión"
                    />
                </div>
            </div>
            <div className="rightSide">
                <div className="fondo">
                    <div className="fondoContainer">
                        <div className="fondoContainerLeft">
                            <div className="rowContainer">
                                <CardFormPatient
                                    title="Medicamentos"
                                    options={options.medicamentos}
                                    note={options}
                                    type={false}
                                ></CardFormPatient>
                                <CardFormPatient
                                    title="Laboratorios"
                                    options={options.laboratorios}
                                    // note=
                                    type={false}
                                ></CardFormPatient>
                            </div>
                            <CardFormPatient
                                title="Nota"
                                note={options.nota}
                                type={true}
                            />
                        </div>
                        <div className="fondoContainerRight">
                            <InformationCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmloyeeView;
