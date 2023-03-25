import React from "react";
import axios from "axios";

import HospitalCard from "../hospitalCard/HospitalCard";

import "./CreateHospitalView.css";

export default class CreateHospital extends React.Component {

    // useEffect( async () => {
    //     const res = await axios.get("http://localhost:3001/hospitals")
    //     console.log(res)
    // }, []);

    state = {
        hospitals: []
    }

    async componentDidMount() {
        //cambiar la ip por la del servidor
        const res = await axios.get("http://10.100.0.226:4000/api/hospitales")

        this.setState({ hospitals: res.data })
    }
 
    render() {
        return (
            <div className="hospitals-container">
                {this.state.hospitals.map(hospital => <HospitalCard key={hospital.id} nombre={hospital.nombre} direccion={hospital.direccion} mail={hospital.mail} telefono={hospital.telefono} website={hospital.website} tipo={hospital.tipo}/> ) }
            </div>
        );
    };
};
