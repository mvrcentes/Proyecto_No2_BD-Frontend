import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/menu/Menu'
import Login from './pages/Login/Login'

// import CreateUser from './components/CreateUser'
import HospitalsView from './components/EntityView/EntityView/EntitiesView'

//admin views
import AdminViewEntities from './pages/adminViewEntities/AdminViewEntities'
import AdminViewDoctors from './pages/adminViewDoctors/AdminViewDoctors'

//employee views
import EmloyeeView from './components/EmployeeView/EmloyeeView'

//patient view
import RegisterView from './components/Patient/registerView/RegisterView'
import ConsultPage from './pages/PatientPages/ConsultPage/ConsultPage'
import MoreInfo from './pages/PatientPages/MoreInfo/MoreInfo'
import EntitiesPage from './pages/PatientPages/EntitiesPage/EntitiesPage'

function App() {
    return (
        <div className="App">            
            <Routes>
                {/* main routes */}
                <Route path="/" element={<Menu />}></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/entities" element={ <HospitalsView /> }></Route>
                {/* <Route path="/hospitalForm" element={ <EntityForm /> }></Route> */}
                {/* <Route path="/user" element={ <CreateUser />} ></Route> */}

                {/* Routes for Admin */}
                <Route path="/adminviewentities" element={ <AdminViewEntities />} ></Route>
                <Route path="/adminviewdoctors" element={ <AdminViewDoctors />} ></Route>

                {/* Routes for employee */}
                <Route path="/employeeView" element={ <EmloyeeView />} ></Route>

                {/* Routes for patient */}
                <Route path="/results/:id" element={ <RegisterView />} ></Route>
                <Route path="/results/:id/consult" element={ <ConsultPage />} ></Route>
                <Route path="/results/:id/moreinfo" element={ <MoreInfo />} ></Route>
                <Route path="/results/:id/entities" element={ <EntitiesPage />} ></Route>
            </Routes>
        </div>
    )
}
    
    export default App
    