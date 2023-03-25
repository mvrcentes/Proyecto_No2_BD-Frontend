import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/menu/Menu'
import RegisterView from './components/results/registerView/RegisterView'
import Login from './pages/Login/Login'

import CreateUser from './components/CreateUser'
import HospitalsView from './components/hospitalsView/HospitalsView'
import HospitalCardForm from './components/hospitalForm/HospitalCardForm'

import InformationCard from './components/EmployeeView/informationCard/InformationCard'
import CardFormPatient from './components/EmployeeView/cardFormPatient/CardFormPatient'
import EmloyeeView from './components/EmployeeView/EmloyeeView'



function App() {
    return (
        <div className="App">            
            <Routes>
                <Route path="/" element={ <Menu /> }></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/hospitals" element={ <HospitalsView /> }></Route>
                
                <Route path="/user" element={ <CreateUser />} ></Route>

                <Route path="/results/:id" element={ <RegisterView />} ></Route>

                <Route path="/hospitalForm" element={ <HospitalCardForm />} ></Route>

                <Route path="/card" element={ <EmloyeeView />} ></Route>
            </Routes>
        </div>
    )
}
    
    export default App
    