//components
import RegisterCard from "../registerCard/RegisterCard";

//style
import "./CreateRegisterView.css";

//data
import FetchData from "../../fetchData/FetchData";
const { getTreatments } = FetchData

const CreateRegisterView = ({search}) => {
    const filteredRegisters = search
    ? getTreatments.filter((register) =>
          register.medico.nombre.toLowerCase().includes(search.toLowerCase())
      )
    : getTreatments;

    console.log(filteredRegisters)

    return (
        <div className="createRegisterCard">
            {filteredRegisters.map((register) => (
                <RegisterCard
                    key={register.dpi_paciente}
                    date={register.fecha}
                    doctorName={register.medico.nombre}
                    entityName={register.institucion.nombre}
                />
            ))}
        </div>
    );
};

export default CreateRegisterView;