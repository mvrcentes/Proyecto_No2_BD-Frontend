import EmployeeView from "../../../../components/view/EmployeeView"

import CreateInfoCardView from "../../../../components/Patient/createInfoCardView/CreateInfoCardView"

import "./ViewPatientTreatments.css"

import { useState } from "react"

import PlusButton from "../../../../components/PlusButton/PlusButton"
import Modalll from "../../../../components/Modal/Modalll"
import TreatmentForm from "../../../../components/EmployeeView/TreatmentForm/TreatmentForm"
import { postTratamiento } from "../../../../components/fetchData/FetchData"

const ViewPatientTreatments = () => {

  const [modal, setModal] = useState(false)
  const [tratamiento, setTratamiento] = useState({
    id_tratamiento: 0,
    id_incidencia: 0,
    id_examen: 0,
    id_cirugia: 0,
    id_medicamento: 0,
    evolucion: "",
    fecha: "",
    id_resultado: 0
  })

  const onChange = (e) => {
    setTratamiento({
      ...tratamiento,
      [e.target.name]: e.target.value,
    })
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const agregarTratamiento = async () => {
    console.log("agregar incidencia")

    try {
        const addedTratamiento = await postTratamiento(tratamiento.id_tratamiento, tratamiento.id_incidencia, tratamiento.id_examen, tratamiento.id_cirugia, tratamiento.id_medicamento, tratamiento.evolucion, tratamiento.fecha, tratamiento.id_resultado);
        console.log(`Tratamiento added successfully: ${JSON.stringify(addedTratamiento)}`);
        // do something after the doctor is added successfully

      } catch (error) {
        console.error(`Error adding incidence: ${error}`);
      }
    
}


  return (
    <EmployeeView>
      <div className="treatments-container">
        <CreateInfoCardView />
      </div>
      <PlusButton onClick={toggleModal} />
      <Modalll modal={modal} handleClose={toggleModal} onClick={agregarTratamiento}>
        <TreatmentForm tratamiento={tratamiento} onChange={onChange} />
      </Modalll>
    </EmployeeView>
  )
}

export default ViewPatientTreatments