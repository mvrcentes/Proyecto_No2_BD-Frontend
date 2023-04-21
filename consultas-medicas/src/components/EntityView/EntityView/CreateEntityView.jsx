//components
import HospitalCard from "../entityCard/EntityCard";

//style
import "./CreateEntityView.css";

//data
import { getEntities } from "../../fetchData/FetchData";
import { useEffect, useState } from "react";

const CreateEntityView = ({ search }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await getEntities()
            setData(result)
        }
        fetchData()
    }, [])

    const filteredEntities = search
        ? data.filter((hospital) =>
              hospital.nombre.toLowerCase().includes(search.toLowerCase())
          )
        : data;

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

export default CreateEntityView;
