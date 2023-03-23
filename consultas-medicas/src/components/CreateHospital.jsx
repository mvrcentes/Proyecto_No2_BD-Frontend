import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/hospital/hospitalList.css";
import "../style/hospital/hospitalForm.css";

const CreateHospital = () => {
    const HospitalCard = () => {
        return (
            <div className="container-hospital">
                <div className="column-hospital">
                    <div className="header-hospital">
                        <h1>Crear Hospital</h1>
                    </div>
                    <div className="body-hospital">
                        <h4>Informacion</h4>
                        <hr />

                        <div className="row-information">
                            <div className="column-information">
                                <h6>Email</h6>
                                <p>info@info.com</p>
                            </div>

                            <div className="column-information">
                                <h6>Telefono</h6>
                                <p>+502 2277-8899</p>
                            </div>
                        </div>

                        <div className="row-information">
                            <div className="column-information">
                                <h6>website</h6>
                                <p>www.hospital.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const HospitalCardForm = () => {
        return (
            <form className="container-hospital-form">
                <h1>Registration form</h1>
                <div className="body-hospital">
                    <div className="row-information">
                        <div className="column-information">
                            <h6>Nombre</h6>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="row-information">
                        <div className="column-information">
                            <h6>Ubicacion</h6>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="row-information">
                        <div className="column-information">
                            <h6>Telefono</h6>
                            <input type="number" />
                        </div>
                    </div>

                    <div className="row-information">
                        <div className="column-information">
                            <h6>Website</h6>
                            <input type="url" />
                        </div>
                    </div>

                    <div className="row-information">
                        <div className="column-information">
                            <h6>Email</h6>
                            <input type="email" />
                        </div>
                    </div>
                </div>
            </form>
        );
    };

    return <HospitalCardForm />;
};

export default CreateHospital;
