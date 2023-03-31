import React, { useState } from "react";

//view
import View from "../../view/View";

//components
import SearchBar from "../../searchBar/SearchBar";
import CreateDoctorRegisterView from "../DoctorRegisterView/createDoctorRegisterView/CreateDoctorRegisterView";

//icons
import menu_doctor from "../../../assets/menu-doctor.svg";
import menu_entidad from "../../../assets/menu-entidad.svg";
import signOut from "../../../assets/SignOut.svg";

//style
import "./AdminViewDoctors.css";

const AdminViewDoctors = () => {
    const [search, setSearch] = useState("");

    const menuOptions = [
        [menu_doctor, "doctores"],
        [menu_entidad, "entidades"],
        [signOut, "salir"],
    ];

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    return (
        <View menuOptions={menuOptions} key={0}>
            <div className="viewContainer">
                <div className="searchBarContainer">
                    <SearchBar value={search} onChange={onSearchChange}/>
                </div>
                <div className="doctorsContainer">
                    <CreateDoctorRegisterView search={search}/>
                </div>
            </div>
        </View>
    );
};

export default AdminViewDoctors;
