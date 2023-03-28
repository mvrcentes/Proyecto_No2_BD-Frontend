import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../../navigation/Navigation";
import CreateEntityView from "./CreateEntityView";

import "./EntitiesView.css";

const HospitalsView = () => {
    return (
        <div rel="stylesheet">
            <Navigation />
            <Link className="nav-link active" to="/hospitalForm">
                <h1>+</h1>
            </Link>
            <div >
                <CreateEntityView/>
            </div>
        </div>
    );
};

export default HospitalsView;
