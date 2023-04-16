import { Link } from "react-router-dom"

//style
import "./registerCard.css"

const RegisterCard = ({ data }) => {
    return (
        <Link to={`/employeeViewPatients/${data.id}/moreinfo`} className="register-link">
            <div className="register" >
                <div className="registerContainer">
                    <div className="date">{data.fecha}</div>
                    <div className="doctorName">{data.doctor}</div>
                    <div className="specialist">{data.especialidad}</div>
                    <div className="EntityName">{data.institucion}</div>
                    <div className="disease">{data.enfermedad}</div>
                </div>
            </div>
        </Link>
    )
}

export default RegisterCard
