import React, { useState } from "react";

//view
import View from "../../components/view/View";

//components
import EntityForm from "../../components/AdminView/entityForm/EntityForm";
import CreateEntityView from "../../components/EntityView/EntityView/CreateEntityView";
import SearchBar from "../../components/searchBar/SearchBar";
import menuOptions from "../../components/AdminView/menuOptions";

//style
import "./AdminViewEntities.css";

const AdminViewEntities = () => {
    const [search, setSearch] = useState("");

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    };

    return (
        <View menuOptions={menuOptions} key={0}>
            <div className="entityFormContainer">
                <EntityForm key="1"/>
            </div>
            <div className="RightSideComponent">
                <div className="rightSideContainer">
                    <div className="searchBarContainer">
                        <SearchBar key="2" value={search} onChange={onSearchChange} />
                    </div>
                    <div className="CreateEntityViewContainer">
                        <CreateEntityView key="3" search={search} />
                    </div>
                </div>
            </div>
        </View>
    );
};

export default AdminViewEntities;
