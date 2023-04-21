import MiniCard from "../../MiniCard/MiniCard"

import "./CardFormDoctor.css"

const CardFormDoctor = ({ title, options, note, type }) => {
    return (
        <div className="card-form-patient">
            <div className="patient-title">Paciente</div>
            <MiniCard title="DPI" className="prueba">
                <input type="text" placeholder="2134 56789 0123" className="patient-input-form"/>
            </MiniCard>

            <MiniCard title="Nombre">
                <input type="text" placeholder="Nombre del paciente" className="patient-input-form"/>
            </MiniCard>

            <MiniCard title="Estado">
                <input type="text" placeholder="Estado del paciente" className="patient-input-form"/>
            </MiniCard>
        </div>
    )
}

export default CardFormDoctor
