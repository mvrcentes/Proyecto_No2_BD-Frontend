import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import EmployeeView from "../../../components/view/EmployeeView"

//components
import CardInfoPatient from "./CardInfoPatient/CardInfoPatient"
import TreatmentCard from "./TreatmentCard/TreatmentCard"

import {
    incidencesByID,
    getTreatmentsByDPI,
} from "../../../components/fetchData/FetchData"

import "./CreateInfoCardView.css"

const CreateInfoCardView = ({ info }) => {
    const { dpi, id } = useParams()
    const [incidenceData, setIncidenceData] = useState([])
    const [treatmentData, setTreatmenteData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await incidencesByID(dpi, id)
            setIncidenceData(result)
            
            const treatmentsResult = await getTreatmentsByDPI(id)
            setTreatmenteData(treatmentsResult)
        }
        fetchData()
    }, [dpi])

    return (
        <div className="create-info-card-view-container">
            {incidenceData.map((dataRegister, index) => (
                <CardInfoPatient key={index} data={dataRegister} />
            ))}
            <div className="treatments-view-scroll">
                {treatmentData.map((treatmentRegister, index) => (
                    <TreatmentCard key={index} data={treatmentRegister} />
                ))}
            </div>
        </div>
    )
}

export default CreateInfoCardView
