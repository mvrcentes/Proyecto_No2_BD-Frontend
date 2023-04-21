import { useEffect, useState } from "react"

import SearchBar from "../../../components/searchBar/SearchBar"
import MiniCard from "../../../components/MiniCard/MiniCard"
import SearchToggleDown from "../../SearchToggleDown/SearchToggleDown"

//data
import { getDiseases, postIncidence } from "../../fetchData/FetchData"

import "./IncidenceForm.css"

const IncidenceForms = () => {
    const [diseases, setDiseases] = useState(null)
    const [disease, setDisease] = useState(null)
    const [diagnostico, setDiagnostico] = useState(null)

    const fetchData = async () => setDiseases(await getDiseases())

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

    console.log({ diseases})

    return (
        <div className="card-form-patient">
            <div className="patient-title">Incidencia</div>
            <MiniCard title="">
                <SearchToggleDown
                    value={diseases.find((e) => e.id == disease)?.nombre ?? "Enfermedad"}
                    onSelect={(id) => setDisease(id)}
                    data={diseases}
                />
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
