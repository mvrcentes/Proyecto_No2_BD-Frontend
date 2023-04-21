import { useEffect, useState } from "react"

import SearchBar from "../../../components/searchBar/SearchBar"
import MiniCard from "../../../components/MiniCard/MiniCard"


import "./TreatmentForm.css"

const TreatmentForm = ({ tratamiento, onChange }) => {

  return (
    <div className="card-form-treatment">
      <div className="treatment-title">Incidencia</div>


      <MiniCard title="Tratamiento">
        <input
          type="number"
          name="id_tratamiento"
          placeholder="ID"
          className="treatment-input-form"
          value={tratamiento.id_tratamiento}
          onChange={onChange}
        />
      </MiniCard>

      <MiniCard title="Incidencia">
        <input
          type="number"
          name="id_incidencia"
          placeholder="Usted se lo sabe"
          className="treatment-input-form"
          value={tratamiento.id_incidencia}
          onChange={onChange}
        />
      </MiniCard>

      <MiniCard title="Examen">
        <input
          type="number"
          name="id_examen"
          placeholder="Usted se lo sabe"
          className="treatment-input-form"
          value={tratamiento.id_examen}
          onChange={onChange}
        />
      </MiniCard>

      <MiniCard title="Cirugia">
        <input
          type="number"
          name="id_cirugia"
          placeholder="Usted se lo sabe"
          className="treatment-input-form"
          value={tratamiento.id_cirugia}
          onChange={onChange}
        />
      </MiniCard>

      <MiniCard title="Medicamento">
        <input
          type="number"
          name="id_medicamento"
          placeholder="Usted se lo sabe"
          className="treatment-input-form"
          value={tratamiento.id_medicamento}
          onChange={onChange}
        />
      </MiniCard>

      <MiniCard title="Evolucion">
        <input
          type="text"
          name="evolucion"
          placeholder="Usted se lo sabe"
          className="treatment-input-form"
          value={tratamiento.evolucion}
          onChange={onChange}
        />
      </MiniCard>

      <MiniCard title="Fecha">
        <input
          type="text"
          name="fecha"
          placeholder="Usted se lo sabe"
          className="treatment-input-form"
          value={tratamiento.fecha}
          onChange={onChange}
        />
      </MiniCard>

      <MiniCard title="Resultado">
        <input
          type="number"
          name="id_resultado"
          placeholder="Usted se lo sabe"
          className="treatment-input-form"
          value={tratamiento.id_resultado}
          onChange={onChange}
        />
      </MiniCard>

    </div>
  )
}

export default TreatmentForm
