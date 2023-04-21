import EmployeeView from "../../../components/view/EmployeeView"

import CardFormPatient from "../../../components/EmployeeView/CardFormPatient/CardFormPatient"
import IncidenceForms from "../../../components/EmployeeView/IncidenceForm/IncidenceForm"
import TreatmentForm from "../../../components/EmployeeView/TreatmentForm/TreatmentForm"

import "./EmployeeViewReports.css"
const EmployeeViewReports = () => {
    return (
        <EmployeeView>
            <div className="employee-view-column">
                <CardFormPatient />
                <IncidenceForms />
            </div>
            <TreatmentForm />
        </EmployeeView>
    )
}

export default EmployeeViewReports
