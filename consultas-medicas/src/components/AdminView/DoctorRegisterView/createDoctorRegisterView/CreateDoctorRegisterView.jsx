// import dotenv from 'dotenv'
import React, { useState, useEffect } from "react";
import axios from "axios";

// dotenv.config()

//style
import "./CreateDoctorRegisterView.css";

//components
import RegisterCard from "../registerCard/RegisterCard";

const CreateDoctorRegisterView = ({ search }) => {
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

    const filteredRegisters = search
        ? entities.filter((hospital) =>
              hospital.nombre.toLowerCase().includes(search.toLowerCase())
          )
        : registers;

    return (
        <div className="CreateRegisterView">
            {filteredRegisters.map((register) => (
                <RegisterCard key={register.id} nameLastName={register.nombre} entityName={register.nombre}  entityAddress={register.direccion}/>
            ))}
        </div>
    );
};

export default CreateDoctorRegisterView;
