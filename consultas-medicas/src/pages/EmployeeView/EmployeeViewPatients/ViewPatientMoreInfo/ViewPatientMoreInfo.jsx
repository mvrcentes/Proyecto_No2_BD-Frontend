import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// View
import EmployeeView from "../../../../components/view/EmployeeView"

// Components
import SearchBar from "../../../../components/searchBar/SearchBar"
import InfoPatient from "../../../../components/EmployeeView/InfoPatient/InfoPatient"
import CreateRegisterView from "../../../../components/Patient/registerView/CreateRegisterView"
import PlusButton from "../../../../components/PlusButton/PlusButton"
import Modal from "../../../../components/Modal/Modal"
import IncidenceForm from "../../../../components/EmployeeView/IncidenceForm/IncidenceForm"

// Data
import { patientByDPI } from "../../../../components/fetchData/FetchData"

import "./ViewPatientMoreInfo.css"

const ViewPatientMoreInfo = () => {
    const { dpi } = useParams()
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const result = await patientByDPI(dpi)
            console.log(result)
            setData(result)
        }
        fetchData()
    }, [dpi])

    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleModal = () => {
        setShowModal(!showModal)
    }

    console.log(showModal)

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
                <PlusButton onClick={() => handleModal()} />
                {showModal && (
                    <Modal>
                        <IncidenceForm></IncidenceForm>
                    </Modal>
                )}
            </div>
        </EmployeeView>
    )
}

export default ViewPatientMoreInfo
