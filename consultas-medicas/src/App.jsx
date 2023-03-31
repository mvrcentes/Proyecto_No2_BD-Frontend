import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/menu/Menu'
import RegisterView from './components/results/registerView/RegisterView'
import Login from './pages/Login/Login'

// import CreateUser from './components/CreateUser'
import HospitalsView from './components/EntityView/EntityView/EntitiesView'

import AdminViewEntities from './pages/adminViewEntities/AdminViewEntities'
import AdminViewDoctors from './pages/adminViewDoctors/AdminViewDoctors'
import CreateRegisterView from './components/AdminView/DoctorRegisterView/createDoctorRegisterView/CreateDoctorRegisterView'
import RegisterCard from './components/AdminView/DoctorRegisterView/registerCard/RegisterCard'

import SearchDropDown from './components/AdminView/DoctorRegisterView/registerCard/SearchDropDown/SearchDropDown'

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

                {/* Routes for Admin */}
                <Route path="/adminviewentities" element={ <AdminViewEntities />} ></Route>
                <Route path="/adminviewdoctors" element={ <AdminViewDoctors />} ></Route>
            </Routes>
        </div>
    )
}
    
    export default App
    