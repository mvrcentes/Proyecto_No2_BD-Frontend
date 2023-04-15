import { Link } from "react-router-dom"

import "./PatientRegisters.css"

const PatientRegisters = ( { data } ) => {

    return (
        <div className="register">
            <div className="registerContainer">
                <div className="dpi">{data.dpi.replace(/(\d{4})(\d{5})(\d{4})/, "$1 $2 $3")}</div>
                <div className="nombre">{data.nombre}</div>
                <div className="telefono">{data.telefono.replace(/(\d{4})(\d{4})/, "$1 - $2")}</div>
                <div className="ver">
                    <Link to="/employeeViewPatients/:id">Visualizar</Link>
                </div>
            </div>
        </div>
    )
}

export default PatientRegisters
