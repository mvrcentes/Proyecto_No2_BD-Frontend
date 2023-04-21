import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// View
import EmployeeView from "../../../../components/view/EmployeeView"

// Components
import SearchBar from "../../../../components/searchBar/SearchBar"
import InfoPatient from "../../../../components/EmployeeView/InfoPatient/InfoPatient"
import CreateRegisterView from "../../../../components/Patient/registerView/CreateRegisterView"
import PlusButton from "../../../../components/PlusButton/PlusButton"
import IncidenceForm from "../../../../components/EmployeeView/IncidenceForm/IncidenceForm"
import Modalll from "../../../../components/Modal/Modalll"

// Data
import {
    patientByDPI,
    postIncidence,
} from "../../../../components/fetchData/FetchData"
import { useSessionContext } from "../../../../contexts/SessionProvider"

import "./ViewPatientMoreInfo.css"

const ViewPatientMoreInfo = () => {
    const { sessionToken } = useSessionContext()
    const { dpi } = useParams()
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [modal, setModal] = useState(false)
    const [incidencia, setIncidencia] = useState({
        id_incidencia: 0, 
        dpi: "", 
        num_colegiado: 0, 
        institucion: 0, 
        id_enfermedad: 0, 
        diagnostico: "", 
        fecha: "",
    })

    const onChange = (e) => {
        setIncidencia({
            ...incidencia,
            [e.target.name]: e.target.value,
        })
    }

    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {
            const result = await patientByDPI(dpi)
            setData(result)
        }
        fetchData()
    }, [dpi])

    const toggleModal = () => {
        setModal(!modal)
    }

    const agregarIncidencia = async () => {
        console.log("agregar incidencia")
    
        try {
            const addedIncidence = await postIncidence(incidencia.id_incidencia, incidencia.dpi, incidencia.num_colegiado, incidencia.institucion, incidencia.id_enfermedad, incidencia.diagnostico, incidencia.fecha);
            console.log(`Incidence added successfully: ${JSON.stringify(addedIncidence)}`);
            // do something after the doctor is added successfully

          } catch (error) {
            console.error(`Error adding incidence: ${error}`);
          }
        
    }

    console.log(sessionToken)


    return (
        <EmployeeView>
            <div className="EmployeeViewContainer">
                <SearchBar value={search} onChange={onSearchChange} />
                <div className="infoCards">
                    {data.map((info) => (
                        <InfoPatient data={info} />
                    ))}
                    <CreateRegisterView search={search} />
                </div>
                <PlusButton onClick={toggleModal} />
                <Modalll modal={modal} handleClose={toggleModal} onClick={agregarIncidencia}>
                    <IncidenceForm incidencia={incidencia} onChange={onChange} />
                </Modalll>
            </div>
        </EmployeeView>
    )
}

export default ViewPatientMoreInfo
