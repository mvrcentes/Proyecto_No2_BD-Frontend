import PatientRegisters from "./PatientRegisters/PatientRegisters"
import SearchBar from "../../../components/searchBar/SearchBar"

import FetchData from "../../fetchData/FetchData"
const { getPatients } = FetchData

import "./PatientRegistersView.css"

const PatientRegistersView = ({ search }) => {
    const FilterRegister = search
        ? getPatients.filter((register) =>
              register.dpi.toLowerCase().includes(search.toLowerCase())
          )
        : getPatients

    return (
        <div className="PatientRegisterView">
            <div className="registersContainer">
                {FilterRegister.map((register, index) => (
                    <PatientRegisters data={register} key={index} />
                ))}
            </div>
        </div>
    )
}

export default PatientRegistersView
