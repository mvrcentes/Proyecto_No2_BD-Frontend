//components
import HospitalCard from "../entityCard/EntityCard";

//style
import "./CreateEntityView.css";

//data
import FetchData from "../../fetchData/FetchData";
const { getEntities } = FetchData

const CreateEntityView = ({ search }) => {
    const filteredEntities = search
        ? getEntities.filter((hospital) =>
              hospital.nombre.toLowerCase().includes(search.toLowerCase())
          )
        : getEntities;

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
