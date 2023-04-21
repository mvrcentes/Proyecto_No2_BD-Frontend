import { useEffect, useState } from "react"

import SearchBar from "../../../components/searchBar/SearchBar"
import MiniCard from "../../../components/MiniCard/MiniCard"
import SearchToggleDown from "../../SearchToggleDown/SearchToggleDown"


import "./IncidenceForm.css"

const IncidenceForms = ( { incidencia, onChange } ) => {

    return (
        <div className="card-form-incidence">
            <div className="incidence-title">Incidencia</div>
            
            <MiniCard title="ID Incidencia">
                <input
                    type="number"
                    name="id_incidencia"
                    placeholder="DPI"
                    className="incidence-input-form"
                    value={incidencia.id_incidencia}
                    onChange={onChange}
                />
            </MiniCard>

            <MiniCard title="Paciente">
                <input
                    type="text"
                    name="dpi"
                    placeholder="DPI"
                    className="incidence-input-form"
                    value={incidencia.dpi}
                    onChange={onChange}
                />
            </MiniCard>
            
            <MiniCard title="Num Colegiado">
                <input
                    type="number"
                    name="num_colegiado"
                    placeholder="Usted se lo sabe"
                    className="incidence-input-form"
                    value={incidencia.num_colegiado}
                    onChange={onChange}
                />
            </MiniCard>
            
            <MiniCard title="ID Institucion">
                <input
                    type="number"
                    name="institucion"
                    placeholder="Usted se lo sabe"
                    className="incidence-input-form"
                    value={incidencia.institucion}
                    onChange={onChange}
                />
            </MiniCard>
            
            <MiniCard title="ID Enfermedad">
                <input
                    type="number"
                    name="id_enfermedad"
                    placeholder="Usted se lo sabe"
                    className="incidence-input-form"
                    value={incidencia.id_enfermedad}
                    onChange={onChange}
                />
            </MiniCard>
            
            <MiniCard title="Diagnostico">
                <input
                    type="text"
                    name="diagnostico"
                    placeholder="Que paso con el paciente?"
                    className="incidence-input-form"
                    value={incidencia.diagnostico}
                    onChange={onChange}
                />
            </MiniCard>
            
            <MiniCard title="Fecha">
                <input
                    type="text"
                    name="fecha"
                    placeholder="Fecha de la incidencia"
                    className="incidence-input-form"
                    value={incidencia.fecha}
                    onChange={onChange}
                />
            </MiniCard>

        </div>
    )
}

export default IncidenceForms
