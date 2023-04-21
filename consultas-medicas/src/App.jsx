import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Menu from './components/menu/Menu'
import Login from './pages/Login/Login'
import HospitalsView from './components/EntityView/EntityView/EntitiesView'

//admin views
import AdminViewEntities from './pages/AdminView/adminViewEntities/AdminViewEntities'
import AdminViewDoctors from './pages/AdminView/adminViewDoctors/AdminViewDoctors'
import AdminViewReports from './pages/AdminView/AdminViewReports/AdminViewReports'

//employee views
import EmployeeViewPatients from './pages/EmployeeView/EmployeeViewPatients/EmployeeViewPatients'
import ViewPatientMoreInfo from './pages/EmployeeView/EmployeeViewPatients/ViewPatientMoreInfo/ViewPatientMoreInfo'
import TraetmentAccordion from './components/EmployeeView/TraetmentAccordion/TraetmentAccordion'
import ViewPatientTreatments from './pages/EmployeeView/EmployeeViewPatients/ViewPatientTreatments/ViewPatientTreatments'
import EmployeeViewReports from './pages/EmployeeView/EmployeeViewReports/EmployeeViewReports'

//patient view
import RegisterView from './components/Patient/registerView/RegisterView'
import ConsultPage from './pages/PatientPages/ConsultPage/ConsultPage'
import MoreInfo from './pages/PatientPages/MoreInfo/MoreInfo'
import EntitiesPage from './pages/PatientPages/EntitiesPage/EntitiesPage'

import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'

//contexts
import { useRolContext } from './contexts/RolProvider'

import Modalll from './components/Modal/Modalll'

function App() {
    const { rol } = useRolContext();

    return (
        <div className="App">            
            <Routes>
                {/* main routes */}
                <Route path="/" element={<Menu />}></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/entities" element={ <HospitalsView /> }></Route>
                <Route path="/modal" element={ <Modalll /> }></Route>3


                {/* Routes for Admin */}
                <Route element={<ProtectedRoutes rol={rol} needs={0} redirectTo='/login'/>} >
                    <Route path="/adminviewentities" element={ <AdminViewEntities />} />
                    <Route path="/adminviewdoctors" element={ <AdminViewDoctors />} />
                    <Route path="/adminviewreports" element={ <AdminViewReports />} />
                </Route>

                {/* Routes for employee */}
                <Route element={<ProtectedRoutes rol={rol} needs={1} redirectTo='/login'/>} >
                    <Route path="/employeeViewPatients" element={ <EmployeeViewPatients />} />
                    <Route path="/employeeViewPatients" element={ <EmployeeViewPatients />} />
                    <Route path="/employeeViewPatients/:dpi" element={ <ViewPatientMoreInfo />} />
                    <Route path="/employeeViewPatients/:dpi/incidence/:id" element={ <ViewPatientTreatments />} />
                    <Route path="/employeeViewReport" element={ <EmployeeViewReports />} />
                </Route>

                
                {/* Routes for patient */}
                <Route path="/results/:id" element={ <RegisterView />} />
                <Route path="/results/:id/consult" element={ <ConsultPage />} />
                <Route path="/results/:id/moreinfo" element={ <MoreInfo />} />
                <Route path="/results/:id/entities" element={ <EntitiesPage />} />
            </Routes>
        </div>
    )
}
    
    export default App
    