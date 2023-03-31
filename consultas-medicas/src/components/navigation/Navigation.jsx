import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Logo
                </Link>

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
