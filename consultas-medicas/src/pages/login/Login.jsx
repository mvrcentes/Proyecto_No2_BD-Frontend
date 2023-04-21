import { Link, Navigate, useNavigate } from "react-router-dom"
import React, { useState, useEffect, useContext } from "react"

import axios from "axios"

import { useRolContext } from "../../contexts/RolProvider"
import { useSessionContext } from "../../contexts/SessionProvider"

import "./style.css"

const Login = () => {
    const [username, setUsername] = useState("prueba")
    const [password, setPassword] = useState("prueba")
    const { rol, setRol } = useRolContext()
    const { sessionToken ,setSessionToken } = useSessionContext()
    const navigate = useNavigate()

    switch (sessionToken.rol_id) {
        case 0:
            return <Navigate to={"/adminviewentities"} />

        case 1:
            return <Navigate to={"/employeeViewPatients"} />
    }

    const onSubmit = (event) => {
        event.preventDefault()
        postData()
            .then((response) => {
                if (!response.data) {
                    return console.error("error")
                }
                setRol(response.data.rol_id)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const postData = async (event) => {
        const r = await axios.post(`http://127.0.0.1:4000/api/auth/signin`, {
            username,
            password,
        })
        setSessionToken({
            "rol_id": r.rol_id,
            "num_colegiado": r.num_colegiado
        })
        return r
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
                                                        type="username"
                                                        name="username"
                                                        className="form-style"
                                                        placeholder="Your Email"
                                                        id="logusername"
                                                        autoComplete="off"
                                                        value={username}
                                                        onChange={(event) =>
                                                            setUsername(
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
                                                        value={password}
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
                                                    onClick={onSubmit}
                                                >
                                                    Inicar sesión
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
                                                    type="username"
                                                    name="logusername"
                                                    className="form-style"
                                                    placeholder="Your Email"
                                                    id="logusername"
                                                    autoComplete="off"
                                                    onChange={(event) =>
                                                        setUsername(
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
                                                submittt
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
