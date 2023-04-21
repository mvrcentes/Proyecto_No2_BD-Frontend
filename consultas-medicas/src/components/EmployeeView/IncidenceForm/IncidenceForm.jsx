import { useEffect, useState } from "react"

import SearchBar from "../../../components/searchBar/SearchBar"
import MiniCard from "../../../components/MiniCard/MiniCard"
import SearchToggleDown from "../../SearchToggleDown/SearchToggleDown"

//data
import { getDiseases, postIncidence } from "../../fetchData/FetchData"

import "./IncidenceForm.css"


const IncidenceForms = ({ entityName, diseaseName, dpi }) => {
    const [diseases, setDiseases] = useState(null)
    const [diagnostico, setDiagnostico] = useState(null)
    const [entityID, setEntityID] = useState(null)

    const fetchData = async () => {
        const r = await getDiseases()
        setDiseases(r)
    }

    useEffect(() => {    
        fetchData()
    }, [])

    if (!diseases) {
        return "Loading..."
    }

    const handleDiagnostico = (event) => {
        const diagnostico = event.target.value
        setDiagnostico(diagnostico)
    }

    return (
        <div className="card-form-patient">
            <div className="patient-title">Incidencia</div>
            <MiniCard title="Institución">
                <input
                    type="text"
                    placeholder="Nombre de institución"
                    className="patient-input-form"
                    value={entityName}
                />
            </MiniCard>

            <MiniCard title="Enfermedad">
                <SearchToggleDown register="Escoge la enfermedad"  data={diseases} />
            </MiniCard>

            <MiniCard title="Diagnostico">
                <input
                    type="text"
                    placeholder="Diagnostico"
                    className="patient-input-form"
                    onChange={handleDiagnostico}
                />
            </MiniCard>
        </div>
    )
}

export default IncidenceForms
