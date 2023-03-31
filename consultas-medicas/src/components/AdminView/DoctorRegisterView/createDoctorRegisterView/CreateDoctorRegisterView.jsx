//style
import "./CreateDoctorRegisterView.css";

//components
import RegisterCard from "../registerCard/RegisterCard";

//data
import doctors from "../../../fetchData/FetchData";

const CreateDoctorRegisterView = ({ search }) => {
    const handleEntityChange = (registerIndex, newEntity) => {
        const newRegisters = [...doctors];
        newRegisters[registerIndex].direccion = newEntity;
        console.log(newEntity);
    };

    const filteredDoctors = search
        ? doctors.filter((person) =>
              person.nombre.toLowerCase().includes(search.toLowerCase())
          )
        : doctors;

    return (
        <div className="CreateRegisterView">
            {filteredDoctors.map((doctor, index) => (
                <RegisterCard
                    key={index}
                    nameLastName={doctor.nombre}
                    entityName={doctor.nombre}
                    entityAddress={doctor.direccion}
                    onChange={handleEntityChange}
                    index={index}
                />
            ))}
        </div>
    );
};

export default CreateDoctorRegisterView;
