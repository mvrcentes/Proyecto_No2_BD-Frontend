import React, { useState } from "react";

//view
import View from "../view/View";

//components
import EntityForm from "./entityForm/EntityForm";
import CreateHospitalView from "../EntityView/hospitalsView/CreateHospitalView"
import SearchBar from "../searchBar/SearchBar"

//iconos
import menu_doctor from "../../assets/menu-doctor.svg"
import menu_entidad from "../../assets/menu-entidad.svg"
import signOut from "../../assets/SignOut.svg"

//style
import "./adminView.css"

const AdminView = () => {
    const [search, setSearch] = useState("")
    
    const menuOptions = [
        [menu_doctor, "doctores"],
        [menu_entidad, "entidades"],
        [signOut, "salir"],
    ]

    const onSearchChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    return (
        <View menuOptions={menuOptions} tipo="row" key={0}> 
            <div className="viewContainer">
                <div className="entityFormContainer">
                    <EntityForm />
                </div>
                <div className="RightSideComponent">
                <div className="rightSideContainer">
                    <div className="searchBarContainer">
                        <SearchBar value={search} onChange={onSearchChange}/>
                    </div>
                    <div className="createHospitalViewContainer">
                        <CreateHospitalView search={search}/>
                    </div>
                </div>
            </div>
            </div>
        </View>
    )
}

export default AdminView