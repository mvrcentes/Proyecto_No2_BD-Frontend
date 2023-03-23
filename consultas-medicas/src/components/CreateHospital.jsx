import React from "react";
import axios from "axios";
import { useEffect } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./hospitalCard/hospitalCard.css";


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


export default class CreateHospital extends React.Component {

    // useEffect( async () => {
    //     const res = await axios.get("http://localhost:3001/hospitals")
    //     console.log(res)
    // }, []);

    state = {
        hospitals: []
    }

    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/api/hospitales")

        this.setState({ hospitals: res.data })

        console.log(this.state.hospitals.at(0))
    }

    // const HospitalCard = () => {ll  
    render() {
        return (
            <div>
                {this.state.hospitals.map(hospital => <HospitalCard key={hospital.id} nombre={hospital.nombre} mail={hospital.direccion} telefono={hospital.telefono} tipo={hospital.tipo}/> ) }
            </div>
        );
    };
};

// export default CreateHospital;
