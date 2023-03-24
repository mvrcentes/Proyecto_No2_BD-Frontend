import { Link } from "react-router-dom";

import "./HospitalCardForm.css";

import axios from "axios";
import { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export default class HospitalCardForm extends Component {
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
        console.log(e)
        console.log(this.validateType())
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
        const res = await axios.post("http://192.168.1.6:4000/api/hospitales", {
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
            <div className="hospitalCardForm">
                <Link to="/hospitals">
                    <h1>←</h1>
                </Link>
                <div className="containerHospitalCardForm">
                    <form
                        className="container-hospital-form"
                        onSubmit={this.onSubmit}
                    >
                        <h1>Registration form</h1>
                        <div className="body-hospital">
                            <div className="row-information">
                                <div className="column-information">
                                    <h6>Nombre</h6>
                                    <input
                                        type="text"
                                        onChange={this.onChangeName}
                                    />
                                </div>
                            </div>

                            <div className="row-information">
                                <div className="column-information">
                                    <h6>Tipo</h6>
                                    <Dropdown onSelect={this.onChangeType}>
                                        <Dropdown.Toggle  id="dropdown-basic">
                                            {this.validateType() ? "Tipo" : this.state.tipo}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="Hospital">Hospital</Dropdown.Item>
                                            <Dropdown.Item eventKey="Centro de salud">Centro de salud</Dropdown.Item>
                                            <Dropdown.Item eventKey="Clinica">Clinica</Dropdown.Item>
                                            <Dropdown.Item eventKey="Laboratorio">Laboratorio</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="row-information">
                                <div className="column-information">
                                    <h6>Ubicacion</h6>
                                    <input
                                        type="text"
                                        onChange={this.onChangeAddress}
                                    />
                                </div>
                            </div>

                            <div className="row-information">
                                <div className="column-information">
                                    <h6>Telefono</h6>
                                    <input
                                        type="number"
                                        onChange={this.onChangePhone}
                                    />
                                </div>
                            </div>

                            <div className="row-information">
                                <div className="column-information">
                                    <h6>Website</h6>
                                    <input
                                        type="url"
                                        onChange={this.onChangeWebsite}
                                    />
                                </div>
                            </div>

                            <div className="row-information">
                                <div className="column-information">
                                    <h6>Email</h6>
                                    <input
                                        type="email"
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                            </div>
                        </div>

                        <button type="submit">
                            <Link to="/hospitals">Submit</Link>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
