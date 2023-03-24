import { Link } from "react-router-dom";

import "./HospitalCardForm.css";

import axios from "axios";
import { Component } from "react";

export default class HospitalCardForm extends Component {
    state = {
        nombre: "",
        direccion: "",
        telefono: "",
        website: "",
        email: "",
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

    // async componentDidMount() {
    //     const res = await axios.get("http://localhost:4000/api/hospitales");
    //     this.setState({ hospitals: res.data });
    //     console.log("res", this.stateHospital.hospitals);
    // }

    onSubmit = (e) => {
        e.preventDefault();
        // const response = await axios.get("http://localhost:4000/api/hospitales")
        const res = axios.post("http://localhost:4000/api/hospitales", {
            name: this.state.nombre,
            address: this.state.direccion,
            phone: this.state.telefono,
            website: this.state.website,
            email: this.state.email,
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