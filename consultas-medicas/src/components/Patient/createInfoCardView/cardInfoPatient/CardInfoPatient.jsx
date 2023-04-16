// Component view
import MiniCard from "../../../MiniCard/MiniCard"

import "./CardInfoPatient.css"

const CardInfoPatient = ({ data }) => {
    return (
        <div className="column-container">
            <MiniCard title="Doctor">
                <div className="doctor-name">{data.doctor}</div>
                <div className="especialidad-doctor">{data.especialidad}</div>
            </MiniCard>

            <MiniCard title="Institucion">
                <div className="institucion-name-mini-card">
                    {data.institucion}
                </div>
            </MiniCard>

            <MiniCard title="Enfermedad">
                <div className="enfermedad-name-mini-card">
                    {data.enfermedad}
                </div>
            </MiniCard>

            <MiniCard title="Diagnostico">
                <div className="diagnostico-text-mini-card">
                    {data.diagnostico}
                </div>
            </MiniCard>
        </div>
    )
}

export default CardInfoPatient
