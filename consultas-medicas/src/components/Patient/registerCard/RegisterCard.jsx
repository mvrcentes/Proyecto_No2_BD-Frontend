import { Link } from "react-router-dom";

//style
import "./registerCard.css";

const RegisterCard = ({ fecha, nombreDoctor, nombreHospital }) => {
    fecha = fecha.slice(0, fecha.indexOf("T"));

    return (
        <div className="register">
            <div className="registerContainer">
                <div className="fecha">{fecha}</div>
                <div className="nombreDoctor">{nombreDoctor}</div>
                <div className="nombreHospital">{nombreHospital}</div>
                <div className="ver"><Link to='/results/:id/moreinfo'>Visualizar</Link></div>
            </div>
        </div>
    );
};

export default RegisterCard;
