import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/menu/Menu'
import RegisterView from './components/results/registerView/RegisterView'
import Login from './pages/Login/Login'

// import CreateUser from './components/CreateUser'
import HospitalsView from './components/EntityView/hospitalsView/HospitalsView'


import InformationCard from './components/EmployeeView/informationCard/InformationCard'
import CardFormPatient from './components/EmployeeView/cardFormPatient/CardFormPatient'
import EmloyeeView from './components/EmployeeView/EmloyeeView'

import AdminViewEntities from './components/AdminView/AdminViewEntities'
import View from './components/view/View'
import SearchBar from './components/searchBar/SearchBar'
import CreateHospitalView from './components/EntityView/hospitalsView/CreateHospitalView'

function App() {
    return (
        <div className="App">            
            <Routes>
                <Route path="/" element={<Menu />}></Route>
                <Route path="/login" element={ <Login /> }></Route>
                
                <Route path="/hospitals" element={ <HospitalsView /> }></Route>
                {/* <Route path="/hospitalForm" element={ <EntityForm /> }></Route> */}

                {/* <Route path="/user" element={ <CreateUser />} ></Route> */}

                <Route path="/results/:id" element={ <RegisterView />} ></Route>

                <Route path="/card" element={ <AdminViewEntities />} ></Route>
            </Routes>
        </div>
    )
}
    
    export default App
    