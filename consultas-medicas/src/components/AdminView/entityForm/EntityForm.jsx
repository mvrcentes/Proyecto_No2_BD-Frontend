import { Link } from "react-router-dom";

import "./entityForm.css";

import axios from "axios";
import { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default class EntityForm extends Component {
    state = {
        nombre: "",
        direccion: "",
        telefono: "",
        website: "",
        email: "",
        tipo: "",
    };

    onChangeName = (e) => {
        this.setState({
            nombre: e.target.value,
        });
    };

    onChangeAddress = (e) => {
        this.setState({
            direccion: e.target.value,
        });
    };

    onChangePhone = (e) => {
        this.setState({
            telefono: e.target.value,
        });
    };

    onChangeWebsite = (e) => {
        this.setState({
            website: e.target.value,
        });
    };

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    onChangeType = (e) => {
        this.setState({
            tipo: e,
        });
        console.log(e);
        console.log(this.validateType());
    };

    validateType = (e) => {
        if (this.state.tipo === "") {
            return true;
        } else {
            return false;
        }
    };

    // async componentDidMount() {
    //     const res = await axios.get("http://localhost:4000/api/hospitales");
    //     this.setState({ hospitals: res.data });
    //     console.log("res", this.stateHospital.hospitals);
    // }

    onSubmit = async (e) => {
        e.preventDefault();
        // const response = await axios.get("http://localhost:4000/api/hospitales")
        const res = await axios.post("http://localhost:4000/api/hospitales", {
            name: this.state.nombre,
            address: this.state.direccion,
            phone: this.state.telefono,
            website: this.state.website,
            email: this.state.email,
            type: this.state.tipo,
        });
    };

    render() {
        return (
            <div className="entityForm">
                <div className="containerEntityForm">
                    
                    <h1>Registrar entidad</h1>

                    <form
                        className="container-entity-form"
                        onSubmit={this.onSubmit}
                    >
                        <div className="body-form">
                            <div className="form-information">
                                <h6>Nombre</h6>
                                <input
                                    type="text"
                                    onChange={this.onChangeName}
                                />
                            </div>

                            <div className="form-information">
                                <h6>Ubicación</h6>
                                <input
                                    type="text"
                                    onChange={this.onChangeName}
                                />
                            </div>

                            <div className="form-information">
                                <h6>Teléfono</h6>
                                <input
                                    type="text"
                                    onChange={this.onChangeName}
                                />
                            </div>

                            <div className="form-information">
                                <h6>Website</h6>
                                <input
                                    type="text"
                                    onChange={this.onChangeName}
                                />
                            </div>

                            <div className="form-information">
                                <h6>Correo</h6>
                                <input
                                    type="text"
                                    onChange={this.onChangeName}
                                />
                            </div>

                            <div className="row-information">
                                <div className="column-information">
                                    <h6>Tipo</h6>
                                    <Dropdown onSelect={this.onChangeType}>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            {this.validateType()
                                                ? "Tipo"
                                                : this.state.tipo}
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

                        <button type="submit" className="submit-button">
                            <Link to="/hospitals">Submit</Link>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
