import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios";

import "./style.css"

// import Auth from "../../components/fetchData/Auth";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post("http://localhost:4000/api/signup/signup", {
            email,
            password
        });
        console.log("first")
    }

    return (
        <div className="login">
            <div className="row full-height justify-content-center">
                <div className="col-12 text-center align-self-center py-5">
                    <div className="section pb-5 pt-5 pt-sm-2 text-center">
                        <h6 className="mb-0 pb-3">
                            <span>Iniciar sesión</span>
                            <span>Registrarse</span>
                        </h6>
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="reg-log"
                            name="reg-log"
                        />
                        <label htmlFor="reg-log"></label>
                        <div className="card-3d-wrap mx-auto">
                            <div className="card-3d-wrapper">
                                <div className="card-front">
                                    <div className="center-wrap">
                                        <div className="section text-center">
                                            <h4 className="mb-4 pb-3">
                                                Log In
                                            </h4>
                                            <form onSubmit={onSubmit}>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-style"
                                                        placeholder="Your Email"
                                                        id="logemail"
                                                        autoComplete="off"
                                                        onChange={(event) =>
                                                            setEmail(
                                                                event.target
                                                                    .value
                                                            )
                                                        }
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="password"
                                                        name="logpass"
                                                        className="form-style"
                                                        placeholder="Your Password"
                                                        id="logpass"
                                                        autoComplete="off"
                                                        onChange={(event) =>
                                                            setPassword(
                                                                event.target
                                                                    .value
                                                            )
                                                        }
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn mt-4"
                                                >
                                                    submitt
                                                </button>
                                            </form>

                                            <p className="mb-0 mt-4 text-center">
                                                <a href="#0" className="link">
                                                    Forgot your password?
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-back">
                                    <div className="center-wrap">
                                        <div className="section text-center">
                                            <h4 className="mb-4 pb-3">
                                                Sign Up
                                            </h4>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="logname"
                                                    className="form-style"
                                                    placeholder="Your Full Name"
                                                    id="logname"
                                                    autoComplete="off"
                                                />
                                                <i className="input-icon uil uil-user"></i>
                                            </div>
                                            <div className="form-group mt-2">
                                                <input
                                                    type="email"
                                                    name="logemail"
                                                    className="form-style"
                                                    placeholder="Your Email"
                                                    id="logemail"
                                                    autoComplete="off"
                                                    onChange={(event) =>
                                                        setEmail(
                                                            event.target.value
                                                        )
                                                    }
                                                />
                                                <i className="input-icon uil uil-at"></i>
                                            </div>
                                            <div className="form-group mt-2">
                                                <input
                                                    type="password"
                                                    name="logpass"
                                                    className="form-style"
                                                    placeholder="Your Password"
                                                    id="logpass"
                                                    autoComplete="off"
                                                    onChange={(event) =>
                                                        setPassword(
                                                            event.target.value
                                                        )
                                                    }
                                                />
                                                <i className="input-icon uil uil-lock-alt"></i>
                                            </div>
                                            <a href="#" className="btn mt-4">
                                                submit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
