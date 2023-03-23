import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/menu/Menu'
import Results from './components/results/Results'
import Login from './pages/Login/Login'
import CreateHospital from './components/CreateHospital'
import CreateUser from './components/CreateUser'
import HospitalesList from './components/HospitalesList'
import HospitalCardForm from './components/hospitalForm/HospitalCardForm'




function App() {
    return (
        <div className="App">            
            <Routes>
                <Route path="/" element={ <Menu /> }></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/hospitals" element={ <HospitalesList /> }></Route>
                <Route path="/edit/:id" element={ <CreateHospital /> }></Route>
                <Route path="/createHospital" element={ <CreateHospital /> }></Route>
                <Route path="/user" element={ <CreateUser />} ></Route>

                <Route path="/results/:id" element={ <Results />} ></Route>

                <Route path="/hospitalForm" element={ <HospitalCardForm />} ></Route>
            </Routes>
        </div>
    )
}
    
    export default App
    