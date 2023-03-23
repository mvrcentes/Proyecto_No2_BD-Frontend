import React from "react";
import { Link } from "react-router-dom";

import HospitalsView from "../hospitalsView/HospitalsView";

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Logo
                </Link>

                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/hospitals"
                            >
                                Hospitales
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Resultados
                            </Link>
                        </li>
                    </ul>
                </div> */}
                <div className="orientacion">
                    <Link className="nav-link active" to="/results/:id">
                        Resultados
                    </Link>

                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/hospitals"
                    >
                        Hospitales
                    </Link>
                    <Link className="nav-link active" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
