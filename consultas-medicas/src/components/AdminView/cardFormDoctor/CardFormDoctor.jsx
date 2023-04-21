import MiniCard from "../../MiniCard/MiniCard"

import "./CardFormDoctor.css"

const CardFormDoctor = ({ doctor, onChange }) => {

    return (
        <div className="card-form-doctor">
            <div className="doctor-title">Doctor</div>
            <MiniCard title="Num. Colegiado" className="prueba">
                <input
                    type="number"
                    name="num_colegiado"
                    placeholder="65789"
                    className="doctor-input-form"
                    value={doctor.num_colegiado}
                    onChange={onChange}
                />
            </MiniCard>

            <MiniCard title="Nombre">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Dr./Dra. Nombre"
                    className="doctor-input-form"
                    value={doctor.nombre}
                    onChange={onChange}
                />
            </MiniCard>

            <MiniCard title="Institucion">
                <input
                    type="number"
                    name="institucion"
                    placeholder="Hospital..."
                    className="doctor-input-form"
                    value={doctor.institucion}
                    onChange={onChange}
                />
            </MiniCard>

            <MiniCard title="Telefono">
                <input
                    type="text"
                    name="telefono"
                    placeholder="0000-0000"
                    className="doctor-input-form"
                    value={doctor.telefono}
                    onChange={onChange}
                />
            </MiniCard>

            <MiniCard title="Direccion">
                <input
                    type="text"
                    name="direccion"
                    className="doctor-input-form"
                    placeholder="Direccion"
                    value={doctor.direccion}
                    onChange={onChange}
                />
            </MiniCard>

            <MiniCard title="Especialidad">
                <input
                    type="text"
                    name="especialidad"
                    placeholder="Cardiologo"
                    className="doctor-input-form"
                    value={doctor.especialidad}
                    onChange={onChange}
                />
            </MiniCard>
        </div>
    )
}

export default CardFormDoctor
