import { useEffect, useState } from "react"

//style
import "./CreateDoctorRegisterView.css"

//components
import RegisterCard from "../registerCard/RegisterCard"

//data
import { getDoctors } from "../../../fetchData/FetchData"

const CreateDoctorRegisterView = ({ search }) => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const result = await getDoctors()
        setData(result)
    }

    useEffect(() => {
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
                    key={doctor.id}
                    doctor={doctor}
                    refresh={fetchData}
                />
            ))}
        </div>
    )
}

export default CreateDoctorRegisterView
