import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//components
import RegisterCard from "../registerCard/RegisterCard"

//style
import "./CreateRegisterView.css"

//getIncidenceJoined
import { incidences } from "../../fetchData/FetchData"

const CreateRegisterView = ({ search }) => {
    const { dpi } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await incidences(dpi)
            setData(result)
        }
        fetchData()
    }, [dpi])

    console.log("first", data)

    const filteredRegisters = search
        ? data.filter((register) =>
              register.doctor.toLowerCase().includes(search.toLowerCase())
          )
        : data 

    return (
        <div className="createRegisterCard">
            {filteredRegisters.map((register, index) => (
                <RegisterCard key={index} data={register} />
            ))}
        </div>
    )
}

export default CreateRegisterView
