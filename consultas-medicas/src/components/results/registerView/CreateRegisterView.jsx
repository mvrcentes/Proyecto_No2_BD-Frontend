import { Component } from "react"
import axios from "axios"

import RegisterCard from "../registerCard/RegisterCard"

import "./CreateRegisterView.css"

export default class CreateRegisterView extends Component  {
    state = {
        registers: []
    }

    async componentDidMount() {
        //cambiar la ip por la del servidor
        const res = await axios.get("http://192.168.1.6:4000/api/hospitales")

        this.setState({ registers: res.data })
    }

    render() {
        return (
        <div className="createRegisterCard">
            {/* {this.state.registers.map(register => <RegisterCard key={register.id} fecha={register.fecha} nombreDoctor={register.nombreDoctor} nombreHospital={register.nombreHospital} /> )} */}
            {this.state.registers.map(register => <RegisterCard key={register.id} fecha={register.created_at} nombreDoctor={register.nombre} nombreHospital={register.direccion} /> )}
        </div>
        )
    }
}

