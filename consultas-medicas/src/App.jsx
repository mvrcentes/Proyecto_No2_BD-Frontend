import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/menu/Menu'
import RegisterView from './components/results/registerView/RegisterView'
import Login from './pages/Login/Login'

// import CreateUser from './components/CreateUser'
import HospitalsView from './components/EntityView/EntityView/EntitiesView'

import AdminViewEntities from './components/AdminView/adminViewEntities/AdminViewEntities'
import AdminViewDoctors from './components/AdminView/adminViewDoctors/AdminViewDoctors'
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

                <Route path="/card" element={ <AdminViewDoctors />} ></Route>
                <Route path="/tmp" element={ <SearchDropDown />} ></Route>
            </Routes>
        </div>
    )
}
    
    export default App
    