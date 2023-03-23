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
        const res = await axios.get("http://localhost:4000/api/hospitales")

        this.setState({ hospitals: res.data })
    }
 
    render() {
        return (
            <div className="hospitals-container">
                {this.state.hospitals.map(hospital => <HospitalCard key={hospital.id} nombre={hospital.nombre} mail={hospital.direccion} telefono={hospital.telefono} tipo={hospital.tipo}/> ) }
            </div>
        );
    };
};
