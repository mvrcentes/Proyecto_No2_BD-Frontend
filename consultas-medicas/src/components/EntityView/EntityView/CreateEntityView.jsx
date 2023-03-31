//components
import HospitalCard from "../entityCard/EntityCard";

//style
import "./CreateEntityView.css";

//data
import registers from "../../fetchData/FetchData";

const CreateHospital = ({ search }) => {
    const filteredEntities = search
        ? registers.filter((hospital) =>
              hospital.nombre.toLowerCase().includes(search.toLowerCase())
          )
        : registers;

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
