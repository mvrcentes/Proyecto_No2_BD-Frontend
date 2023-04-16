//components
import RegisterCard from "../registerCard/RegisterCard";

//style
import "./CreateRegisterView.css";

//data
import FetchData from "../../fetchData/FetchData";
const { getIncidenceJoined } = FetchData

const CreateRegisterView = ({search}) => {
    const filteredRegisters = search
    ? getIncidenceJoined.filter((register) =>
          register.doctor.toLowerCase().includes(search.toLowerCase())
      )
    : getIncidenceJoined;

    return (
        <div className="createRegisterCard">
            {filteredRegisters.map((register) => (
                <RegisterCard
                    key={register.dpi_paciente}
                    data={register}
                />
            ))}
        </div>
    );
};

export default CreateRegisterView;