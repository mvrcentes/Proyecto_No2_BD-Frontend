import { useState } from "react"

import "./entityForm.css"

import axios from "axios"
import Dropdown from "react-bootstrap/Dropdown"

import { addEntity } from "../../../components/fetchData/FetchData"

const EntityForm = () => {
    const [info, setInfo] = useState({
        id: 0,
        name: "",
        address: "",
        phone: "",
        website: "",
        email: "",
        type: "",
    })

    const onChange = ({ target: { name, value } }) =>
        setInfo({ ...info, [name]: value })

    const onChangeType = (selectedItem) =>
        setInfo({ ...info, type: selectedItem })

    const validateType = () => {
        return info.type === "" ? true : false
    }

    const validateForm = () => {
        return Object.values(info).every((val) => val !== "") ? false : true
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        
        const res = await addEntity( info.id, info.name, info.address, info.phone, info.website, info.email, info.type )
        console.log(`Institucion added successfully: ${JSON.stringify(res)}`);

        setInfo({
            id: 0,
            name: "",
            address: "",
            phone: "",
            website: "",
            email: "",
            type: "",
        })

        e.preventDefault()
    }

    return (
        <div className="entityForm">
            <div className="containerEntityForm">
                <form className="container-entity-form" onSubmit={onSubmit}>
                    <h1 className="title">Registrar entidad</h1>
                    <div className="body-form">

                        <div className="form-information">
                            <h6>ID</h6>
                            <input
                                type="number"
                                name="id"
                                onChange={onChange}
                                placeholder="ID Institucion"
                                className="input-EntityForm"
                                required
                            />
                        </div>

                        <div className="form-information">
                            <h6>Nombre</h6>
                            <input
                                type="text"
                                name="name"
                                onChange={onChange}
                                placeholder="Nombre"
                                className="input-EntityForm"
                                required
                            />
                        </div>

                        <div className="form-information">
                            <h6>Dirección</h6>
                            <input
                                type="text"
                                name="address"
                                onChange={onChange}
                                placeholder="Dirección"
                                className="input-EntityForm"
                                required
                            />
                        </div>

                        <div className="form-information">
                            <h6>Teléfono</h6>
                            <input
                                type="text"
                                name="phone"
                                onChange={onChange}
                                placeholder="Teléfono"
                                className="input-EntityForm"
                                // pattern="/^[0-9]{8}$/"
                                required
                            />
                        </div>

                        <div className="form-information">
                            <h6>Website</h6>
                            <input
                                type="text"
                                name="website"
                                onChange={onChange}
                                placeholder="Website"
                                className="input-EntityForm"
                                required
                            />
                        </div>

                        <div className="form-information">
                            <h6>Correo</h6>
                            <input
                                type="text"
                                name="email"
                                onChange={onChange}
                                placeholder="Correo"
                                className="input-EntityForm"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            />
                        </div>

                        <div className="form-information">
                            <div className="column-information">
                                <h6>Tipo</h6>
                                <Dropdown name="type" onSelect={onChangeType}>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {info.type || "Tipo"}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="Hospital">
                                            Hospital
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Centro de salud">
                                            Centro de salud
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Clinica">
                                            Clinica
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Laboratorio">
                                            Laboratorio
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={validateForm}
                        onClick={onSubmit}
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EntityForm
