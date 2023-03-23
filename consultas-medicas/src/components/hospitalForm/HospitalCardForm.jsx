import "./HospitalCardForm.css";

const HospitalCardForm = () => {
    return (
        <div className="hospitalCardForm">
            <form className="container-hospital-form">
                <h1>Registration form</h1>
                <div className="body-hospital">
                    <div className="row-information">
                        <div className="column-information">
                            <h6>Nombre</h6>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="row-information">
                        <div className="column-information">
                            <h6>Ubicacion</h6>
                            <input type="text" />
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
        </div>
    );
};

export default HospitalCardForm;
