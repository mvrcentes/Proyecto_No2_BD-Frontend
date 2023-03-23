import "./HospitalCard.css"

const HospitalCard = ({ nombre, mail, telefono, tipo}) => {

    return (
        <div className="container-hospital">
            <div className="column-hospital">
                <div className="header-hospital">
                    <h1>{ nombre }</h1>
                </div>
                <div className="body-hospital">
                    <h4>Informacion</h4>
                    <hr />

                    <div className="row-information">
                        <div className="column-information">
                            <h6>Email</h6>
                            <p>{ mail }</p>
                        </div>

                        <div className="column-information">
                            <h6>Telefono</h6>
                            <p>{ telefono }</p>
                        </div>
                    </div>

                    <div className="row-information">
                        <div className="column-information">
                            <h6>website</h6>
                            <p>{ tipo }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HospitalCard;