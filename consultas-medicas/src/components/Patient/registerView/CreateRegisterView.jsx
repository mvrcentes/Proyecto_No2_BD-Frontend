//components
import RegisterCard from "../registerCard/RegisterCard";

//style
import "./CreateRegisterView.css";

//data
import registers from "../../fetchData/FetchData";

const CreateRegisterView = ({search}) => {
    const filteredEntities = search
    ? registers.filter((hospital) =>
          hospital.nombre.toLowerCase().includes(search.toLowerCase())
      )
    : registers;

    return (
        <div className="createRegisterCard">
            {filteredEntities.map((register) => (
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