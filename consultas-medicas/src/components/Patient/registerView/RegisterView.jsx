import { useState } from "react";

//components
import Navigation from "../../navigation/Navigation";
import CreateRegisterView from "./CreateRegisterView";
import SearchBar from "../../searchBar/SearchBar";

//style
import "./registerView.css";

const registerView = () => {
    const [search, setSearch] = useState("");

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="registerView">
            <Navigation />
            <div className="searchBar">
                <SearchBar  value={search} onChange={onSearchChange}/>
            </div>
            <div className="CreateRegisterViewContainer">
                <CreateRegisterView search={search}/>
            </div>
        </div>
    );
};

export default registerView;
