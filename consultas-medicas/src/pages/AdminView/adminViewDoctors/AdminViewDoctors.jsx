import React, { useState, useEffect } from "react"

//view
import View from "../../../components/view/View"

//components
import SearchBar from "../../../components/searchBar/SearchBar"
import CreateDoctorRegisterView from "../../../components/AdminView/DoctorRegisterView/createDoctorRegisterView/CreateDoctorRegisterView"
import menuOptions from "../../../components/AdminView/MenuOptions"
import PlusButton from "../../../components/PlusButton/PlusButton"
import Modalll from "../../../components/Modal/Modalll"
import CardFormDoctor from "../../../components/AdminView/CardFormDoctor/CardFormDoctor"

//data
import { addDoctor, addUser } from "../../../components/fetchData/FetchData"

//style
import "./AdminViewDoctors.css"

const AdminViewDoctors = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [doctor, setDoctor] = useState({
        num_colegiado: 0,
        institucion: 0,
        nombre: "",
        telefono: "",
        direccion: "",
        especialidad: "",
    })
    const [modal, setModal] = useState(false)

    const onChange = (e) => {
        setDoctor({
            ...doctor,
            [e.target.name]: e.target.value,
        })
    }

    const onSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    const agregarDoctor = async () => {
        console.log("agregar doctor")

        try {
            const addedDoctor = await addDoctor(doctor.num_colegiado, doctor.institucion, doctor.nombre, doctor.telefono, doctor.direccion, doctor.especialidad);
            const addedUsers = await addUser(doctor.telefono, doctor.telefono, 1, doctor.num_colegiado);
            console.log(`Doctor added successfully: ${JSON.stringify(addedDoctor)}`);
            console.log(`User added successfully: ${JSON.stringify(addedUsers)}`);
            // do something after the doctor is added successfully

          } catch (error) {
            console.error(`Error adding doctor: ${error}`);
          }

    }

    return (
        <View menuOptions={menuOptions} key={0}>
            <div className="viewContainer">
                <div className="searchBarContainer">
                    <SearchBar value={search} onChange={onSearchChange} />
                </div>
                <div className="doctorsContainer">
                    <CreateDoctorRegisterView search={search} />
                </div>
                <PlusButton onClick={toggleModal} />
                <Modalll modal={modal} handleClose={toggleModal} onClick={agregarDoctor}>
                    <CardFormDoctor doctor={doctor} onChange={onChange}/>
                </Modalll>
            </div>
        </View>
    )
}

export default AdminViewDoctors
