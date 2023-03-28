import React, { useState, useEffect } from "react";
import axios from "axios";

import HospitalCard from "../entityCard/EntityCard";

import "./CreateEntityView.css";

const CreateHospital = ({ search }) => {
    const [entities, setEntities] = useState([]);

    const fetchData = async () => {
        const res = await axios.get("http://192.168.1.6:4000/api/hospitales")
        setEntities(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [entities]);

    const filteredEntities = search
        ? entities.filter((hospital) =>
              hospital.nombre.toLowerCase().includes(search.toLowerCase())
          )
        : entities;

    return (
        <div className="hospitals-container">
            {filteredEntities.map((hospital) => (
                <HospitalCard
                    key={hospital.id}
                    nombre={hospital.nombre}
                    direccion={hospital.direccion}
                    mail={hospital.mail}
                    telefono={hospital.telefono}
                    website={hospital.website}
                    tipo={hospital.tipo}
                />
            ))}
        </div>
    );
};

export default CreateHospital;
