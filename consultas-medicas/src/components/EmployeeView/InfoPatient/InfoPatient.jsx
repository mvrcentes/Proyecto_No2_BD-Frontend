import "./InfoPatient.css"

const MiniCard = ({title, info, color}) => {
    return (
        <div className="mini-card">
            <div className={`title ${color}`}>{title}</div>
            <div className="info">{info}</div>
        </div>
    )
}

const InfoPatient = ({data}) => {
    return (
        <div className="info-patient">
            <div className="title-name">Nombre Nombre Apellido Apellido</div>

            <MiniCard title="Indice masa corporal" info={"hola"} color="morado"/>
            <MiniCard title="Altura" info={"hola"} color="rojo"/>
            <MiniCard title="Peso" info={"hola"} color="morado"/>
            <MiniCard title="Adicciones" info={"hola"} color="naranja"/>
        </div>
    )
}

export default InfoPatient
