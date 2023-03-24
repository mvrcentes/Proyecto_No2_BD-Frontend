import "./HospitalCard.css";

const HospitalCard = ({ nombre, direccion, telefono, mail, website, tipo }) => {
    return (
        <div>
            <div className="container-hospital">
                <div className="column-hospital">
                    <div className="header-hospital">
                        <h1>{nombre}</h1>
                        <div className={`tipo ${tipo}`}>{ tipo }</div>
                    </div>
                    <div className="body-hospital">
                        <h4>Informacion</h4>
                        <hr />

                        <div className="row-information">
                            <div className="column-information">
                                <h6>Direccion</h6>
                                <p>{direccion}</p>
                            </div>

                            <div className="column-information">
                                <h6>Telefono</h6>
                                <p>{telefono}</p>
                            </div>
                        </div>

                        <div className="row-information">
                            <div className="column-information">
                                <h6>Mail</h6>
                                <p>{mail}</p>
                            </div>
                        </div>
                        

                        <div className="row-information">
                            <div className="column-information">
                                <h6>website</h6>
                                <p>{website}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalCard;
