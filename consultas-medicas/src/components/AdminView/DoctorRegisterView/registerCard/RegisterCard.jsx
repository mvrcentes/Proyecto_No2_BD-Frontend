import { useEffect, useState } from "react"

//style
import "./RegisterCard.css"

//components
import SearchDropDown from "../registerCard/SearchDropDown/SearchDropDown"
import SearchToggleDown from "../../../../components/SearchToggleDown/SearchToggleDown"

//Data
import {
    updateDoctor,
    getEntities,
} from "../../../../components/fetchData/FetchData"

const RegisterCard = ({ doctor, refresh }) => {
    const [idInstitucion, setidInstitucion] = useState(doctor.id_institucion)
    const [data, setData] = useState(null)

    const fetchData = async () => setData(await getEntities())

    

    useEffect(() => {
        fetchData()
    }, [])

    if (!data) {
        return "Loading"
    }

    const handleUpdate = async () => {
        await updateDoctor(doctor.num_colegiado, idInstitucion)
        refresh()
    }

    console.log({data, idInstitucion})

    return (
        <div className="registerCard">
            <div className="fila">
                <div className="nameLastName">{doctor.nombre}</div>
                <div className="numCole">{doctor.num_colegiado}</div>
                <div className="searchDropDown">
                    <SearchToggleDown
                        className="entityName"
                        value={
                            data.find((e) => e.id === idInstitucion)?.nombre
                        }
                        onSelect={(id) => {
                            setidInstitucion(Number(id))
                        }}
                        data={data}
                    />
                </div>
                <div className="entityAddress">{doctor.direccion}</div>
            </div>
            { idInstitucion !== doctor.id_institucion && (
                <button className="updateRegister" onClick={handleUpdate}>
                    actualizar
                </button>
            )}
        </div>
    )
}

export default RegisterCard
