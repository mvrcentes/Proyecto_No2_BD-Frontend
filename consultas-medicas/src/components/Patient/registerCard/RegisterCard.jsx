import { Link } from "react-router-dom"

//style
import "./registerCard.css"

const RegisterCard = ({ date, doctorName, entityName }) => {
    date = date.slice(0, date.indexOf("T"))

    return (
        <div className="register">
            <div className="registerContainer">
                <div className="fecha">{date}</div>
                <div className="nombreDoctor">{doctorName}</div>
                <div className="nombreHospital">{entityName}</div>
                <div className="ver">
                    <Link to="/results/:id/moreinfo">Visualizar</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterCard
