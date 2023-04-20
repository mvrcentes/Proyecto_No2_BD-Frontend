import { useEffect, useState } from "react"

//style
import "./CreateDoctorRegisterView.css"

//components
import RegisterCard from "../registerCard/RegisterCard"

//data
import  { getDoctors }  from "../../../fetchData/FetchData"


const CreateDoctorRegisterView = ({ search }) => {
    const [data, setData] = useState([])
    
    const handleEntityChange = (registerIndex, newEntity) => {
        const newRegisters = [...data]
        newRegisters[registerIndex].direccion = newEntity
    }

    useEffect(() => {
        async function fetchData() {
            const result = await getDoctors()
            setData(result)
        }
        fetchData()
    }, [])

    const filteredDoctors = search
        ? data.filter((person) =>
              person.nombre.toLowerCase().includes(search.toLowerCase())
          )
        : data

    return (
        <div className="CreateRegisterView">
            {filteredDoctors.map((doctor, index) => (
                <RegisterCard
                    key={index}
                    nameLastName={doctor.nombre}
                    numCole={doctor.num_colegiado}
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
