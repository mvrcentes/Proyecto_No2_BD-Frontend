//view
import View from "../view/View";

//components
import EntityForm from "./entityForm/EntityForm";
import CreateHospitalView from "../EntityView/hospitalsView/CreateHospitalView";
import SearchBar from "../searchBar/SearchBar";

//iconos
import menu_doctor from "../../assets/menu-doctor.svg";
import menu_entidad from "../../assets/menu-entidad.svg";
import signOut from "../../assets/SignOut.svg";

//style
import "./adminView.css";

export default function AdminView() {
    const menuOptions = [
        [menu_doctor, "doctores"],
        [menu_entidad, "entidades"],
        [signOut, "salir"],
    ];

    const RightSideComponent = () => {
        return (
            <div className="RightSideComponent">
                <div className="rightSideContainer">
                    <div className="searchBarContainer">
                        <SearchBar />
                    </div>
                    <div className="createHospitalViewContainer">
                        <CreateHospitalView />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <View menuOptions={menuOptions} tipo="row">
            <div className="viewContainer">
                <div className="entityFormContainer">
                    <EntityForm />
                </div>
                <RightSideComponent />
            </div>
        </View>
    );
}
