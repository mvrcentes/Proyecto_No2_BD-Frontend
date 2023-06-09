import "./InfoPatient.css"

const MiniCard = ({title, info, color}) => {
    return (
        <div className="mini-card">
            <div className={`title ${color}`}>{title}</div>
            <div className="info">{info}</div>
        </div>
    )
}

const InfoPatient = ({ data }) => {
    return (
        <div className="info-patient">
            <div className="title-name">{ data.nombre }</div>
            <MiniCard title="Indice masa corporal" info={data.masa_corporal} color="morado"/>
            <MiniCard title="Altura" info={data.altura} color="rojo"/>
            <MiniCard title="Peso" info={data.peso} color="morado"/>
            <MiniCard title="Adicciones" info={data.adicciones ?? "N/A" } color="naranja"/>
        </div>
    )
}

export default InfoPatient
