import SearchBar from "../../../components/searchBar/SearchBar"
import MiniCard from "../../../components/MiniCard/MiniCard"

import "./IncidenceForm.css"

const IncidenceForms = () => {
    return (
        <div className="card-form-patient">
            <div className="patient-title">Incidencia</div>
            <MiniCard title="Institución">
                <input
                    type="text"
                    placeholder="Nombre de institución"
                    className="patient-input-form"
                />
            </MiniCard>

            <MiniCard title="Enfermedad">
                <input
                    type="text"
                    placeholder="Nombre de enfermedad"
                    className="patient-input-form"
                />
            </MiniCard>

            <MiniCard title="Diagnostico">
                <input
                    type="text"
                    placeholder="Diagnostico"
                    className="patient-input-form"
                />
            </MiniCard>
        </div>
    )
}

export default IncidenceForms
