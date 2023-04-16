import MiniCard from "../../../../components/MiniCard/MiniCard"

import "./TreatmentCard.css"

const TreatmentCard = ({ data }) => {
    return (
        <div className="treatment-view">
            <div className="treatments-view-date">{data.fecha}</div>
            <MiniCard title="Evolucion">{data.evolucion}</MiniCard>
            <MiniCard title="Resultado">{data.resultado}</MiniCard>
            <MiniCard title="Examen">{data.examen}</MiniCard>
            <MiniCard title="Cirugia">{data.cirugia}</MiniCard>
            <MiniCard title="Medicamento">{data.medicamento}</MiniCard>
        </div>
    )
}

export default TreatmentCard
