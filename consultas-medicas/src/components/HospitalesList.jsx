import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./navigation/Navigation";

const HospitalesList = () => {
    return (
        <div rel="stylesheet">
            <Navigation />
            <Link className="nav-link active" to="/hospitalForm">
                <h1>+</h1>
            </Link>
        </div>
    );
};

export default HospitalesList;
