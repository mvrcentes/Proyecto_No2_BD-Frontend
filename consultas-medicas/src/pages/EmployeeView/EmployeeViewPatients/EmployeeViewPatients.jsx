import { useState } from "react"

import View from "../../../components/view/View"

import menuOptions from "../../../components/EmployeeView/Menu"

import PatientRegistersView from "../../../components/EmployeeView/PatientRegistersView/PatientRegistersView"
import SearchBar from "../../../components/searchBar/SearchBar"

import "./EmployeeViewPatients.css"

const EmployeeViewPatients = () => {
    const [search, setSearch] = useState("")

    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <View menuOptions={menuOptions}>
            <div className="EmployeeViewPatients">
                <SearchBar value={search} onChange={onSearchChange}/>
                <PatientRegistersView search={search}/>
            </div>
        </View>
    )
}

export default EmployeeViewPatients
