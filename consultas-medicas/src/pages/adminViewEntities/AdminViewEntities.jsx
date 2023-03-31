import React, { useState } from "react";

//view
import View from "../../components/view/View";

//components
import EntityForm from "../../components/AdminView/entityForm/EntityForm";
import CreateEntityView from "../../components/EntityView/EntityView/CreateEntityView";
import SearchBar from "../../components/searchBar/SearchBar";

//iconos
import menu_doctor from "../../assets/menu-doctor.svg";
import menu_entidad from "../../assets/menu-entidad.svg";
import signOut from "../../assets/SignOut.svg";

//style
import "./AdminViewEntities.css";

const AdminViewEntities = () => {
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
            <div className="entityFormContainer">
                <EntityForm />
            </div>
            <div className="RightSideComponent">
                <div className="rightSideContainer">
                    <div className="searchBarContainer">
                        <SearchBar value={search} onChange={onSearchChange} />
                    </div>
                    <div className="CreateEntityViewContainer">
                        <CreateEntityView search={search} />
                    </div>
                </div>
            </div>
        </View>
    );
};

export default AdminViewEntities;
