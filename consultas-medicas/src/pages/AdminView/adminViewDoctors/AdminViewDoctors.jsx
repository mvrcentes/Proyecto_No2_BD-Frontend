import React, { useState } from "react"

//view
import View from "../../../components/view/View"

//components
import SearchBar from "../../../components/searchBar/SearchBar"
import CreateDoctorRegisterView from "../../../components/AdminView/DoctorRegisterView/createDoctorRegisterView/CreateDoctorRegisterView"
import menuOptions from "../../../components/AdminView/MenuOptions"
import PlusButton from "../../../components/PlusButton/PlusButton"

//style
import "./AdminViewDoctors.css"

const AdminViewDoctors = () => {
    const [search, setSearch] = useState("")

    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <View menuOptions={menuOptions} key={0}>
            <div className="viewContainer">
                <div className="searchBarContainer">
                    <SearchBar value={search} onChange={onSearchChange} />
                </div>
                <div className="doctorsContainer">
                    <CreateDoctorRegisterView search={search} />
                </div>
                <PlusButton />
            </div>
        </View>
    )
}

export default AdminViewDoctors
