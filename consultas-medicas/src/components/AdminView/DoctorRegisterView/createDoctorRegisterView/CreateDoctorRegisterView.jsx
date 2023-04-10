//style
import "./CreateDoctorRegisterView.css"

//components
import RegisterCard from "../registerCard/RegisterCard"

//data
import FetchData from "../../../fetchData/FetchData"
const { getDoctors } = FetchData

const CreateDoctorRegisterView = ({ search }) => {
    const handleEntityChange = (registerIndex, newEntity) => {
        const newRegisters = [...getDoctors]
        newRegisters[registerIndex].direccion = newEntity
        console.log(newEntity)
    }

    console.log(getDoctors)

    const filteredDoctors = search
        ? getDoctors.filter((person) =>
              person.nombre.toLowerCase().includes(search.toLowerCase())
          )
        : getDoctors

    return (
        <div className="CreateRegisterView">
            {filteredDoctors.map((doctor, index) => (
                <RegisterCard
                    key={index}
                    nameLastName={doctor.nombre}
                    entityName={doctor.institucion}
                    entityAddress={doctor.direccion}
                    onChange={handleEntityChange}
                    index={index}
                />
            ))}
        </div>
    )
}

export default CreateDoctorRegisterView
