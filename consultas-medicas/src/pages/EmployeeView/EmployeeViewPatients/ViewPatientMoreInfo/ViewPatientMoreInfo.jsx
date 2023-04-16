import { useState } from "react"

import EmployeeView from "../../../../components/view/EmployeeView"

import SearchBar from "../../../../components/searchBar/SearchBar"
import InfoPatient from "../../../../components/EmployeeView/InfoPatient/InfoPatient"
import CreateRegisterView from "../../../..//components/Patient/registerView/CreateRegisterView"

import "./ViewPatientMoreInfo.css"

const ViewPatientMoreInfo = () => {
    const [search, setSearch] = useState("")

    const onSearchChange = (e) => {
        setSearch(e.target.value)
     
    }
    return (
        <EmployeeView>
            <div className="EmployeeViewContainer">
                <SearchBar value={search} onChange={onSearchChange}/>
                <div className="infoCards">
                    <InfoPatient />
                    <CreateRegisterView search={search}/>
                </div>
            </div>
        </EmployeeView>
    )
}

export default ViewPatientMoreInfo
