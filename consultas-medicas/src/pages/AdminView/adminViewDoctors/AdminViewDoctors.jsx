import React, { useState } from "react"

//view
import View from "../../../components/view/View"

//components
import SearchBar from "../../../components/searchBar/SearchBar"
import CreateDoctorRegisterView from "../../../components/AdminView/DoctorRegisterView/createDoctorRegisterView/CreateDoctorRegisterView"
import menuOptions from "../../../components/AdminView/MenuOptions"

//icons
import menuDoctor from "../../../assets/menu-doctor.svg"
import menu_entidad from "../../../assets/menu-entidad.svg"
import signOut from "../../../assets/SignOut.svg"

//style
import "./AdminViewDoctors.css"

const AdminViewDoctors = () => {
    const [search, setSearch] = useState("")

    const onSearchChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
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
            </div>
        </View>
    )
}

export default AdminViewDoctors
