import { useState } from "react";

//view
import View from "../../../components/view/View";

//components
import CreateEntityView from "../../../components/EntityView/EntityView/CreateEntityView";
import SearchBar from "../../../components/searchBar/SearchBar";

//menu
import menuOptions from "../MenuOptions";

//style
import './EntitiesPage.css'

const EntitiesPage = () => {
    const [search, setSearch] = useState("");

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <View menuOptions={menuOptions} key={0} tipo="normal">
            <div className="EntitiesPageContainer">
                <div className="searchBar">
                    <SearchBar
                        key="2"
                        value={search}
                        onChange={onSearchChange}
                    />
                </div>
                <div className="CreateEntityViewContainer">
                    <CreateEntityView key="3" search={search} />
                </div>
            </div>
        </View>
    );
};

export default EntitiesPage;
