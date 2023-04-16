import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import EmployeeView from "../../../components/view/EmployeeView"

//components
import CardInfoPatient from "./cardInfoPatient/CardInfoPatient"

import { incidences } from "../../../components/fetchData/FetchData"

import "./CreateInfoCardView.css"

const MiniCard = ({ title, children }) => {
    return (
        <div className="mini-card-info-card">
            <div className="mini-card-title">{title}</div>
            <div>{children}</div>
        </div>
    )
}

const CreateInfoCardView = ({ options }) => {
    const { dpi } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await incidences(dpi)
            console.log(result)
            setData(result)
        }
        fetchData()
    }, [dpi])

    console.log(data)

    return (
        <EmployeeView>
            <div className="fondo-container">
                <div className="column-container">
                    <MiniCard title="Doctor">
                        <div className="doctor-name">{data.doctor}</div>
                        <div className="especialidad-doctor">Especialidad</div>
                    </MiniCard>

                    <MiniCard title="Institucion">
                        <div className="institucion-name-mini-card">
                            Nombre institucion
                        </div>
                    </MiniCard>

                    <MiniCard title="Enfermedad">
                        <div className="enfermedad-name-mini-card">Gripe</div>
                    </MiniCard>

                    <MiniCard title="Diagnostico">
                        <div className="diagnostico-text-mini-card">
                            Gripe Comun
                        </div>
                    </MiniCard>
                </div>

                <div className="treatments-view-scroll">
                    <div className="treatment-view">
                        <div className="treatments-view-date">Date</div>
                        <MiniCard title="Evolucion">
                            el paciente presenta mejoras
                        </MiniCard>
                        <MiniCard title="Resultado">Resultado</MiniCard>
                        <MiniCard title="Examen">Radiografia</MiniCard>
                        <MiniCard title="Cirugia">Cirugia</MiniCard>
                        <MiniCard title="Medicamento">Paracetamol</MiniCard>
                    </div>
                </div>
            </div>
        </EmployeeView>
    )
}

export default CreateInfoCardView
