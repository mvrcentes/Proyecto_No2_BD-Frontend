import { useState, useEffect } from "react";
import axios from "axios";

import RegisterCard from "../registerCard/RegisterCard";

import "./CreateRegisterView.css";

const CreateRegisterView = () => {
    const [registers, setRegisters] = useState([]);

    const fetchData = async () => {
        // const res = await axios.get("http://10.100.6.212:4000/api/hospitales");
        // const res = await axios.get("http://172.20.10.2:4000/api/hospitales");
        const res = await axios.get("http://192.168.1.6:4000/api/hospitales");
        setRegisters(res.data);
    };

    useEffect(() => {
        fetchData();
    }, [registers]);

    return (
        <div className="createRegisterCard">
            {/* {this.state.registers.map(register => <RegisterCard key={register.id} fecha={register.fecha} nombreDoctor={register.nombreDoctor} nombreHospital={register.nombreHospital} /> )} */}
            {registers.map((register) => (
                <RegisterCard
                    key={register.id}
                    fecha={register.created_at}
                    nombreDoctor={register.nombre}
                    nombreHospital={register.direccion}
                />
            ))}
        </div>
    );
};

export default CreateRegisterView;