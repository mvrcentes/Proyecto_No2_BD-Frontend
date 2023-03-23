import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../navigation/Navigation";
import CreateHospitalView from "./CreateHospitalView";

import "./HospitalsView.css";

const HospitalsView = () => {
    return (
        <div rel="stylesheet">
            <Navigation />
            <Link className="nav-link active" to="/hospitalForm">
                <h1>+</h1>
            </Link>
            <div >
                <CreateHospitalView/>
            </div>
        </div>
    );
};

export default HospitalsView;
