//creo que ya no se usara

import Navigation from "../../navigation/Navigation";
import CreateEntityView from "./CreateEntityView";

import "./EntitiesView.css";

const HospitalsView = () => {
    return (
        <div rel="stylesheet">
            <Navigation />
            <div >
                <CreateEntityView/>
            </div>
        </div>
    );
};

export default HospitalsView;
