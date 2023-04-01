import { useState } from "react";

//view
import View from "../../../components/view/View";

//components
import CreateRegisterView from "../../../components/Patient/registerView/CreateRegisterView";
import SearchBar from "../../../components/searchBar/SearchBar";

//menu
import menuOptions from "../MenuOptions";

//style
import './ConsultPage.css'

const ConsultPage = () => {
    const [search, setSearch] = useState("");

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <View menuOptions={menuOptions} key={0} tipo="normal">
            <div className="ConsultPageContainer">
                <div className="searchBar">
                    <SearchBar
                        key="2"
                        value={search}
                        onChange={onSearchChange}
                    />
                </div>
                <div className="CreateRegisterViewContainer">
                    <CreateRegisterView key="3" search={search} />
                </div>
            </div>
        </View>
    );
};

export default ConsultPage;
